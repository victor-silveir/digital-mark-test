import { ReactNode } from 'react';

import * as S from './styles';

type LayoutProps = {
	children?: ReactNode;
	title: string;
};

function Layout({ title, children }: LayoutProps): JSX.Element {
	return (
		<S.Grid>
			<S.LayoutSidebar />
			<S.LayoutHeader pageTitle={title} />
			<S.Container>{children}</S.Container>
		</S.Grid>
	);
}

export default Layout;
