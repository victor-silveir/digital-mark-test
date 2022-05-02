import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			background: string;
			primary: string;
			secondary: string;
			white: string;
		};
		fonts: {
			small: string;
			medium: string;
			large: string;
		};
	}
}
