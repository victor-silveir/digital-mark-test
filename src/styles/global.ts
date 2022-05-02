import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ${({ theme }) => css`
			body {
				background: ${theme.colors.background};
			}
		`}
`;
