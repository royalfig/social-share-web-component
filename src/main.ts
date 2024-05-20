import { createDarkModeStyles } from "./dark-mode";
import { createPopoverContent } from "./popover";
import { icons } from "./icons";
import style from "./style.css?inline";
import { createUserStyles } from "./user-styles";

export class ShareButton extends HTMLElement {
	isPopoverSupport = Object.prototype.hasOwnProperty.call(
		HTMLElement.prototype,
		"popover",
	);
	isMobile =
		(/android/i.test(navigator.userAgent) ||
			/iPhone|iPad|iPod/i.test(navigator.userAgent)) &&
		navigator.share;

	connectedCallback(): void {
		const shadow = this.attachShadow({ mode: "open" });
		const title =
			document.querySelector("title")?.textContent ||
			document.querySelector("h1")?.textContent ||
			"";
		
		const userStyles = createUserStyles(this);
		const icon = this.createIcon();

		// button
		const button = this.createButton(icon);

		// popover
		const popover = this.createPopover(title);

		button.addEventListener("click", (e) => {
			const userAgent = navigator.userAgent;
			const target = e.currentTarget as Element;

			if (
				(/android/i.test(userAgent) || /iPhone|iPad|iPod/i.test(userAgent)) &&
				navigator.share
			) {
				button.removeAttribute("popover");
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
				popover.style.left = `${buttonCoords.left + buttonCoords.width / 2}px`;

				if (document.documentElement.clientHeight / 2 > buttonCoords.y) {
					// PUT below
					popover.style.top = `${
						scrollY + buttonCoords.top + buttonCoords.height
					}px`;
					popover.style.translate = "-50% 5px";
					popover.classList.remove("above");
				} else {
					// PUT above
					popover.style.top = `${scrollY + buttonCoords.top}px`;
					popover.style.translate = "-50% calc(-100% + -5px)";
					popover.classList.add("above");
				}
			}
		});

		function closePopover() {
			const popover = shadow.querySelector("[popover]") as HTMLElement;
			popover.hidePopover();
		}

		addEventListener("resize", closePopover);
		addEventListener("scroll", closePopover);

		
		// dark mode
		const darkModeStyles = createDarkModeStyles(this);

		const wrapper = document.createElement("div");
		wrapper.setAttribute("class", "wrapper");
		wrapper.setAttribute("part", "wrapper");
		wrapper.append(button, popover);
		shadow.append(wrapper);

		const styles = new CSSStyleSheet();
		styles.replaceSync(style + userStyles + darkModeStyles);
		shadow.adoptedStyleSheets = [styles];
	}

	render() {}

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

	createButton(icon: string) {
		const button = document.createElement("button");
		button.setAttribute("part", "share-button");
		button.setAttribute("class", "share-button");
		if (this.isPopoverSupport && !this.isMobile) {
			button.setAttribute("popovertarget", "share-popover");
		}
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
		return button;
	}

	createPopover(title: string) {
		
			const networks =
			this.getAttribute("networks") ||
			"x, linkedin, facebook, email, whatsapp, telegram, copy";
			const popover = document.createElement("div");
			popover.setAttribute("id", "share-popover");
			popover.setAttribute("part", "share-popover");
			popover.setAttribute("popover", "auto");
	
			const popoverContent = createPopoverContent({
				url: window.location.href,
				title,
				shareText: this.textContent ?? "Share",
				networks,
			});
	
			popover.append(popoverContent);
			return popover;
		}

		
	
}

customElements.define("share-button", ShareButton);
