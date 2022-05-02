import { BrowserRouter, Switch } from 'react-router-dom';
import AboutMe from '../pages/AboutMe';
import CustomersPage from '../pages/Customers';
import LayoutRoute from './LayouteRoute';

function Routes(): JSX.Element {
	return (
		<BrowserRouter>
			<Switch>
				<LayoutRoute Component={CustomersPage} path={['/']} title="Clientes" />

				<LayoutRoute
					Component={AboutMe}
					path={['/about-me']}
					title="Victor Bruno"
				/>
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
