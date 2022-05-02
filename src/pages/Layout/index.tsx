import { ReactNode } from 'react';

import * as S from './styles';

type LayoutProps = {
	children?: ReactNode;
};

function Layout({ children }: LayoutProps): JSX.Element {
	return (
		<S.Grid>
			<S.LayoutSidebar />
			<S.LayoutHeader pageTitle="Hello world" />
			<S.Container>{children}</S.Container>
		</S.Grid>
	);
}

export default Layout;
