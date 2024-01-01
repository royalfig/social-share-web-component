import darkModeStyles from "./dark-mode-styles.css?inline";

export function createDarkModeStyles(el: HTMLElement) {
	const darkMode = el.getAttribute("dark-mode");

	if (darkMode === "false") {
		return "";
	}

	return `
${darkModeStyles}
@media (prefers-color-scheme: dark) {
    .wrapper {
        ${darkMode}
    }
}
`;
}
