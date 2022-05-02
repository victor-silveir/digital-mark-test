import { ThemeProvider } from 'styled-components';
import SideBar from './components/Sidebar';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<SideBar />
		</ThemeProvider>
	);
}

export default App;
