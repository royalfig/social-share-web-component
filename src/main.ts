import { createDarkModeStyles } from "./dark-mode";
import { createDialogEl } from "./dialog";
import { icons } from "./icons";
import style from "./style.css?inline";
import { createUserStyles, userCustomProps } from "./user-styles";

export class ShareButton extends HTMLElement {
	static init(): void {
		const isInjected: HTMLElement | null = document.querySelector(
			"script[data-position]",
		);

		if (isInjected) {
			const { dataset } = isInjected;
			const { position } = dataset;

			if (position == null || !["left", "right", "center"].includes(position)) {
				throw Error(
					'[Share Button] It looks like you did not specify a valid position for the button. Please add a data-inject attribute with a value of "left," "right," or "center"',
				);
			}

			const button = document.createElement("share-button");
			button.setAttribute("part", "share-button");
			for (const key of userCustomProps) {
				const value = isInjected.getAttribute(`data-${key}`);
				value && button.setAttribute(key, value);
			}

			// Set attributes
			button.setAttribute("position", position);
			document.body.append(button);
		}

		customElements.define("share-button", ShareButton);
	}

	connectedCallback(): void {
		const title =
			document.querySelector("title")?.textContent ||
			document.querySelector("h1")?.textContent ||
			"";
		const ogImage =
			document
				.querySelector('meta[property="og:image"]')
				?.getAttribute("content") || "";

		const shadow = this.attachShadow({ mode: "open" });

		// icon
		const icon = this.createIcon();

		// user styles
		const userStyles = createUserStyles(this);

		// button
		const button = document.createElement("button");
		button.setAttribute("part", "share-button");
		button.setAttribute("class", "share-button");
		button.setAttribute("class", "share-button");
		button.setAttribute("popovertarget", "share-popover");
		const buttonText = this.textContent ?? "Share";
		const isCircle = this.hasAttribute("circle");

		if (isCircle) {
			button.setAttribute("aria-label", "Share");
			button.setAttribute("style", "border-radius: 50%; padding: 0.5rem;");
			button.innerHTML = icon;
		} else {
			button.innerHTML = `${
				this.textContent ? "<slot></slot>" : "Share"
			}${icon}`;
		}

		// dialog
		const dialog = document.createElement("div");
		dialog.setAttribute("id", "share-popover");
		dialog.setAttribute("part", "share-popover");
		dialog.setAttribute("popover", "auto");

		const dialogContent = createDialogEl({
			url: window.location.href,
			title,
			img: ogImage,
			shareText: buttonText,
		});
		dialog.innerHTML = dialogContent;

		button.addEventListener("click", (e) => {
			const userAgent = navigator.userAgent;
			const target = e.currentTarget as Element;

			if (
				(/android/i.test(userAgent) || /iPhone|iPad|iPod/i.test(userAgent)) &&
				navigator.share
			) {
				try {
					navigator.share({
						title,
						url: window.location.href,
					});
					target.removeAttribute("popover");
				} catch (err) {
					console.log(err);
				}
			} else {
				const target = e.currentTarget as Element;

				const buttonCoords = target.getBoundingClientRect();

				const scrollY = window.scrollY;
				const popover = shadow.querySelector("[popover]") as HTMLElement;
				popover?.style.setProperty(
					"left",
					`calc(${
						buttonCoords.left + buttonCoords.width / 2
					}px - 1em - .75em/2)`,
				);

				console.log(
					scrollY,
					document.documentElement.clientHeight / 2 > buttonCoords.y,
					popover,
				);

				if (document.documentElement.clientHeight / 2 > buttonCoords.y) {
					// PUT below
					popover.style.top = `${
						scrollY + buttonCoords.top + buttonCoords.height + 5 
					}px`;
					popover.style.translate = "initial";
				} else {
					// PUT above

					popover.style.top = `${scrollY + buttonCoords.top - 5 }px`;
					popover.style.translate = "0 -100%";
				}
			}
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

				setTimeout(() => {
					currentTarget.classList.toggle("copied");
				}, 5000);
			} catch (err) {
				console.log("[Share Button] We could not copy this");
			}
		});

		// dark mode
		const darkModeStyles = createDarkModeStyles(this);

		const wrapper = document.createElement("div");
		wrapper.setAttribute("class", "wrapper");
		wrapper.setAttribute("part", "wrapper");
		wrapper.append(button, dialog);
		shadow.append(wrapper);

		const styles = new CSSStyleSheet();
		styles.replaceSync(style + userStyles + darkModeStyles);
		shadow.adoptedStyleSheets = [styles];
	}

	private createIcon() {
		const iconChoice = this.getAttribute("icon") || "1";
		let icon;
		if (iconChoice === "false") {
			icon = "";
		} else if (!["1", "2", "3", "4", "5", "6", "7"].includes(iconChoice)) {
			console.log(
				'[Share Button] It looks like you did not specify a valid icon. Please add an icon attribute with a value of "1," "2," "3," "4," "5," "6," or "7"',
			);
			icon = icons["1" as keyof typeof icons];
		} else {
			icon = icons[iconChoice as keyof typeof icons];
		}
		return icon;
	}
}

ShareButton.init();
