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
			family: string;
			normal: number;
			medium: number;
			semiBold: number;
			bold: number;
			extraBold: number;
			black: number;
			sizes: {
				small: string;
				medium: string;
				large: string;
				xlarge: string;
				xxlarge: string;
			};
		};
		border: {
			radius: string;
		};
	}
}
