import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	${({ theme }) => css`
		height: 100vh;
		width: 20.5rem;
		padding: 1rem 1rem;
		background: ${theme.colors.primary};
	`}
`;

export const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

export const LogoContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		gap: 0.3rem;
		color: ${theme.colors.white};
		font-size: ${theme.fonts.sizes.xlarge};
		font-weight: ${theme.fonts.semiBold};
	`};
`;

export const MenuContainer = styled.div`
	margin: 4rem 0rem;
`;

export const MenuGroup = styled.ul`
	list-style: none;
`;

export const MenuItem = styled.li`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		gap: 1rem;
		font-size: 1.125rem;
		font-weight: 500;
		color: ${theme.colors.white};
		padding: 1.2rem 1rem;
		border-radius: 0.5rem;
		cursor: pointer;
		transition: all 0.5s ease-in-out;

		:hover {
			background: ${theme.colors.secondary};
		}

		& + li {
			margin-top: 1rem;
		}
	`}
`;
