import { ThemeProvider } from 'styled-components';
import { FilterValueProvider } from './hooks/use-filter-value';
import Routes from './routes';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<FilterValueProvider>
				<Routes />
			</FilterValueProvider>
		</ThemeProvider>
	);
}

export default App;
