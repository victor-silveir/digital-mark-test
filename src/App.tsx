import { ThemeProvider } from 'styled-components';
import Layout from './pages/Layout';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Layout />
		</ThemeProvider>
	);
}

export default App;
