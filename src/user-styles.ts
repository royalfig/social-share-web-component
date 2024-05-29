import fixedStyles from "./fixed.css?inline";

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
		`[Share Button] It looks you specified an unknown value (${fixed}) for the fixed attribute. Available options are "left," "right," and "center"`,
	);
	return "";
}

function createCustomStyle(el: HTMLElement, variables: string[]) {
	return variables
		.map((variable) => {
			const value = el.getAttribute(variable);
console.log(el, el.getAttribute(variable))
			if (!value) {
				return "";
			}

			return `--${variable}: ${value};`;
		})
		.join("\n");
}


const userStyles = [
	"color-button-text",
	"color-button-bg",
	"color-popup-bg",
	"color-popup-text",
];

export function createUserStyles(el: HTMLElement) {
	const position = el.getAttribute("position");
	const fixedPositionStyles = createFixedPosition(position);
	const customStyles = createCustomStyle(el, userStyles);

	return `
.wrapper {
	${fixedPositionStyles}
	${customStyles}
	${position && fixedStyles}
}`;
}
