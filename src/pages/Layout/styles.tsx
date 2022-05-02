import styled from 'styled-components';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

export const Grid = styled.main`
	display: grid;
	grid-template-columns: 20.5rem 1fr;
	grid-template-rows: 8rem 1fr;
	gap: 0;
	grid-template-areas:
		'menu header'
		'menu container';
	height: 100vh;
`;

export const LayoutSidebar = styled(Sidebar)`
	grid-area: menu;
`;

export const LayoutHeader = styled(Header)`
	grid-area: header;
`;

export const Container = styled.section`
	padding: 2rem 7rem;
	width: 100%;
	max-width: 84vw;
	position: relative;
	grid-area: container;
`;
