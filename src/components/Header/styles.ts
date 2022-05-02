import styled from 'styled-components';

export const NavHeader = styled.header`
	position: relative;
	width: 100%;
	min-height: 7.5rem;
	padding: 0 4rem;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

export const HeaderInformationsContainer = styled.div`
	display: flex;
	flex: 1;
	justify-content: space-between;
`;

export const ProfileContainer = styled.nav`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-left: 4rem;
	> * {
		margin: 1rem 1rem 1rem 2.5rem;
	}
`;

export const Profile = styled.nav`
	display: flex;
	align-items: center;
	> * {
		margin: 1rem 1rem 1rem 2.5rem;
	}
`;
