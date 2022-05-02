import styled, { css, DefaultTheme } from 'styled-components';
import { TextFieldProps } from './types';

type WrapperProps = Pick<TextFieldProps, 'disabled'> & {
	width?: string;
	display?: boolean;
};

export type IconProps = {
	clickable: boolean;
};

export const Icon = styled.div<IconProps>`
	${({ theme, clickable }) => css`
		display: flex;
		color: ${theme.colors.primary};
		order: 1;
		cursor: ${clickable ? 'pointer' : 'default'};
		user-select: none;

		& > svg {
			width: 1.2rem;
			height: 100%;
		}
	`}
`;

export const InputWrapper = styled.div`
	${({ theme }) => css`
		position: absolute;
		width: 0;
		top: 0;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background: ${theme.colors.background};
		border-radius: ${theme.border.radius};
		padding: 0 1.2rem;
		width: 0;
		transition: width 0.5s ease-in-out;

		&:focus-within {
			--box-shadow-color: ${theme.colors.secondary};
			box-shadow: 0 0 0.5rem var(--box-shadow-color);
		}
	`}
`;

export const Input = styled.input`
	${({ theme }) => css`
    visibility: hidden;
    width: 100%;
    font-family: ${theme.fonts.family};
    font-size: ${theme.fonts.sizes.medium};
    padding: calc(0.8rem - 0.15rem) 0.4rem};
    background: transparent;
    border: 0;
    outline: none;
    transition: visibility 0.5s ease-out;

    &::placeholder {
      color: gray;
    }
  `}
`;

const wrapperModifiers = {
	disabled: () => css`
		${Input},
		${Icon} {
			cursor: not-allowed;
			color: gray;

			&::placeholder {
				color: currentColor;
			}
		}

		${InputWrapper} {
			border-color: gray;
		}
	`,
	display: (theme: DefaultTheme) => css`
		${InputWrapper} {
			width: 100%;
			top: 0;
			border: 0.1rem solid;
			border-color: ${theme.colors.primary};
		}
		${Input} {
			visibility: visible;
		}
	`,
};

export const Wrapper = styled.div<WrapperProps>`
	${({ disabled, width, display, theme }) => css`
		width: ${width || '100%'};
		min-width: 300px;
		position: relative;

		${disabled && wrapperModifiers.disabled};
		${display && wrapperModifiers.display(theme)}
	`}
`;
