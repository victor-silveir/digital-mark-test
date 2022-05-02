import { ComponentType, ReactNode } from 'react';

import {
	Route as ReactDOMRoute,
	RouteComponentProps,
	RouteProps as ReactDOMRouteProps,
} from 'react-router-dom';

export type RouteProps = {
	Component: ComponentType<RouteComponentProps>;
	useLayout?: boolean;
} & ReactDOMRouteProps;

function Route({ Component, ...props }: RouteProps): JSX.Element {
	const render = (params: RouteComponentProps): ReactNode => (
		<Component {...params} />
	);

	return <ReactDOMRoute {...props} render={render} />;
}

export default Route;
