import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Header pageTitle="hello world" />
		</ThemeProvider>
	);
}

export default App;
