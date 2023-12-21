import darkModeStyles from "./dark-mode-styles.css?inline";

export function createDarkModeStyles(el: HTMLElement, isInjection = false) {
	const darkMode = el.getAttribute(
		isInjection ? "data-dark-mode" : "dark-mode",
	);

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
