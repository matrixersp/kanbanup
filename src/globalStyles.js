import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export default createGlobalStyle`
	${normalize}

	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	body {
		font-family: 'Open Sans', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-size: 1rem;
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
			monospace;
	}

	/* deepskyblue == #61dafb */

	input, textarea {
		font-family: 'Open Sans', sans-serif;
		color: #444444;
	}

	input:focus, textarea:focus {
		background-color: #ffffff;
		outline: none;
		border: .125rem solid #61dafb;
	}

	::-webkit-scrollbar {
			width: .5rem;  /* Total width including 'border-width' of scrollbar thumb */
	}

	::-webkit-scrollbar-track, ::-webkit-scrollbar-thumb {
			border-radius: .5rem;
			background-clip: padding-box;
	}
	::-webkit-scrollbar-track {
		background-color: #e0e4e3;
	}

	::-webkit-scrollbar-thumb {
			background-color: #c6cac9;
	}
`;
