import { BrowserRouter, Switch } from 'react-router-dom';
import CustomersPage from '../pages/Customers';
import LayoutRoute, { LayoutRouteProps } from './LayouteRoute';

const componentsWithLayout = [
	{
		key: 1,
		Component: CustomersPage,
		path: ['/'],
		title: 'Clientes',
	},
];

function Routes(): JSX.Element {
	return (
		<BrowserRouter>
			<Switch>
				{componentsWithLayout.map((route: LayoutRouteProps) => (
					<LayoutRoute {...route} />
				))}
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
