import style from "./style.css?inline";
import { icons } from "./icons";
import { createDialogEl } from "./dialog";
import { createUserStyles, userCustomProps } from "./user-styles";
import { createDarkModeStyles } from "./dark-mode";

class ShareButton extends HTMLElement {
	connectedCallback(): void {
		const title = document.querySelector("title")?.textContent || "";
		const ogImage =
			document
				.querySelector('meta[property="og:image"]')
				?.getAttribute("content") || "";

		const shadow = this.attachShadow({ mode: "open" });

		// icon
		const iconChoice = this.getAttribute("icon") || "1";
		const icon = icons[iconChoice as keyof typeof icons];

		// user styles
		const userStyles = createUserStyles(this);

		// dialog
		const dialog = document.createElement("dialog");
		const dialogContent = createDialogEl({
			url: window.location.href,
			title,
			img: ogImage,
		});
		dialog.innerHTML = dialogContent;
		const closeButton = dialog.querySelector(".close-button");
		closeButton?.addEventListener("click", () => {
			dialog.close();
		});

		// copy button
		const copyButton = dialog.querySelector('[aria-label="Copy link"]');
		copyButton?.addEventListener("click", async (e) => {
			const currentTarget = e.currentTarget as Element;

			if (!currentTarget) {
				console.error("Error copying. Element not found");
				return;
			}

			const text = currentTarget.querySelector("span");

			if (!text) {
				return;
			}

			try {
				await navigator.clipboard.writeText(window.location.href);
				currentTarget.classList.toggle("copied");
				text.textContent = "Copied 🥳";

				setTimeout(() => {
					currentTarget.classList.toggle("copied");
					text.textContent = "Copy link";
				}, 5000);
			} catch (err) {
				console.log("We could not copy this");
			}
		});

		// button
		const button = document.createElement("button");
		const buttonText = this.getAttribute("button-text") || "Share";
		button.setAttribute("class", "share-button");
		button.innerHTML = buttonText + icon;
		button.addEventListener("click", () => {
			dialog.showModal();
		});

		// dark mode
		const darkModeStyles = createDarkModeStyles(this);
		console.log(
			"🚀 ~ file: main.ts:82 ~ ShareButton ~ connectedCallback ~ darkModeStyles:",
			darkModeStyles,
		);

		const wrapper = document.createElement("div");
		wrapper.setAttribute("class", "wrapper");
		wrapper.append(button, dialog);
		shadow.append(wrapper);

		const styles = new CSSStyleSheet();
		styles.replaceSync(style + userStyles + darkModeStyles);
		shadow.adoptedStyleSheets = [styles];
	}
}

function init(): void {
	const isInjected: HTMLElement | null = document.querySelector(
		"script[data-position]",
	);

	if (isInjected) {
		const { dataset } = isInjected;
		const { position } = dataset;

		if (position == null || !["left", "right", "center"].includes(position)) {
			throw Error(
				'[Share Link] It looks like you did not specify a valid position for the button. Please add a data-inject attribute with a value of "left," "right," or "center"',
			);
		}

		const button = document.createElement("share-button");
		for (const key of userCustomProps) {
			const value = isInjected.getAttribute(`data-${key}`);
			value && button.setAttribute(key, value);
		}

		// Set attributes
		button.setAttribute("fixed", position);

		document.body.append(button);
	}

	customElements.define("share-button", ShareButton);
}

init();
