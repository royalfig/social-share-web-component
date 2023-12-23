function createFixedPosition(fixed: string | null) {
	const distance = "28px";
	const fixedPosition = `position: fixed; bottom: ${distance};`;

	if (!fixed) {
		return "";
	}

	const fixLowercase = fixed.toLowerCase();

	if (fixLowercase === "left" || fixLowercase === "right") {
		return `${fixedPosition} ${fixLowercase}: ${distance};`;
	}

	if (fixLowercase === "center") {
		return `${fixedPosition} left: 50%; translate: -50% 0;`;
	}

	console.error(
		`[Share Link] It looks you specified an unknown value (${fixed}) for the fixed attribute. Available options are "left," "right," and "center"`,
	);
	return "";
}

function createCustomStyle(el: HTMLElement, variables: string[]) {
	return variables
		.map((variable) => {
			const value = el.getAttribute(variable);

			if (!value) {
				return "";
			}

			return `--${variable}: ${value};`;
		})
		.join("\n");
}

export const userCustomProps = [
	"color-button",
	"color-button-dark",
	"color-button-text",
	"color-button-text-dark",
	"color-backdrop",
	"color-backdrop-dark",
	"color-border",
	"color-border-dark",
	"color-surface",
	"color-surface-dark",
	"color-element",
	"color-element-dark",
	"dark-mode",
];

export function createUserStyles(el: HTMLElement) {
	const fixed = el.getAttribute("fixed");
	const position = createFixedPosition(fixed);
	const customStyles = createCustomStyle(el, userCustomProps);

	return `
.wrapper {
	${position}
	${customStyles}
}`;
}
