import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
`;

export type OverlayProps = {
	show?: boolean;
};

export const Overlay = styled.div<OverlayProps>`
	${({ theme, show }) => css`
		width: 100%;
		height: 100%;
		position: absolute;
		opacity: 0.5;
		align-items: center;
		justify-content: center;
		display: ${show ? 'flex' : 'none'};
		background-color: ${theme.colors.white};
	`}
`;

export const Table = styled.table`
	${({ theme }) => css`
		box-shadow: 0.1rem 0.1rem 0.5rem rgba(0, 0, 0, 0.25);
		background: ${theme.colors.primary};
		color: black;
		border-collapse: collapse;
		overflow: hidden;
		width: 100%;

		tr:first-child th {
			border-bottom: none;
		}

		tr:last-child td {
			border-bottom: none;
		}

		td,
		th {
			border-bottom: 1px solid ${theme.colors.white};
			padding: 0.5rem;
			text-align: left;
		}
	`}
`;

type ThProps = {
	width?: string;
};

export const Th = styled.th<ThProps>`
	${({ width, theme }) => css`
		padding: 1.2rem 0.5rem;
		background-color: ${theme.colors.secondary};
		color: ${theme.colors.white};
		${!!width &&
		css`
			width: ${width};
		`}
	`}
`;
