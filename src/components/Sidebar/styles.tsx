import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
	${({ theme }) => css`
		height: 100vh;
		width: 20.5rem;
		padding: 2rem 1rem;
		background: ${theme.colors.primary};
		border-top-right-radius: ${theme.border.radius};
		border-bottom-right-radius: ${theme.border.radius};
	`}
`;

export const TitleContainer = styled.div`
	display: flex;
	padding: 0.7rem 0;
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
		padding: 1.2rem 1.2rem;
		color: ${theme.colors.white};
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

export const ItemLink = styled(Link)`
	${({ theme }) => css`
		text-decoration: none;
		font-size: 1.125rem;
		font-weight: 500;
		color: ${theme.colors.white};
	`}
`;
