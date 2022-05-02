import Layout from '../pages/Layout';
import Route, { RouteProps } from './Route';

export type LayoutRouteProps = {
	title: string;
} & RouteProps;

function LayoutRoute({
	title,
	Component,
	...props
}: LayoutRouteProps): JSX.Element {
	return (
		<Layout title={title}>
			<Route Component={Component} {...props} />
		</Layout>
	);
}

export default LayoutRoute;
