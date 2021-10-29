import { createGlobalStyle } from "styled-components"

import normalize from "./normalize"
import { above } from "./index"

const GlobalStyles = createGlobalStyle`
	${normalize};

	:root {
		--red: #FF6666;
		--offWhite: #f7f1f1;
		--white: #FFF;
		--black: #000;
	}

	body {
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-height: 100vh;
        width: 100%;
		padding: 0 10px;
		color: var(--black);
		background-color: var(--offWhite);
		font-family: 'Quicksand', sans-serif;
		font-size: 1.125rem;
		line-height: 1.8rem;
		text-spacing: 1px;

		${above.tabletLarge`
			align-items: center;
		`}
	}
`

export default GlobalStyles