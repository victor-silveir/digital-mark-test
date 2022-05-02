import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
        ${({ theme }) => css`
					* {
						margin: 0;
						padding: 0;
						box-sizing: border-box;
						font-family: ${theme.fonts.family};
					}

					body {
						background: ${theme.colors.background};
					}
				`}
`;
