import {
	xIcon,
	fbIcon,
	liIcon,
	copyIcon,
	copiedIcon,
	whatsappIcon,
	telegramIcon,
	emailIcon,
} from "./icons";

type PopoverContent = {
	url: string;
	title: string;
	shareText?: string;
	networks: string;
};

export function createPopoverContent({
	url,
	title,
	shareText,
	networks,
}: PopoverContent) {
	function createSocialMediaLink(
		icon: string,
		network: string,
		shareURL: string,
	) {
		let finalUrl = shareURL.replace(/{{url}}/g, url);

		if (title) {
			finalUrl = finalUrl.replace(/{{text}}/g, title);
		}

		const a = document.createElement("a");
		a.classList.add("social-media", network.toLowerCase());
		a.href = encodeURI(finalUrl);
		a.setAttribute("aria-label", `Share on ${network}`);
		a.setAttribute("target", "_blank");
		a.setAttribute("rel", "noopener noreferrer");
		a.setAttribute("part", "share-link");
		a.innerHTML = `${icon} ${network}`;

		return a;
	}

	const networksMap = new Map([
		[
			"facebook",
			{
				html: createSocialMediaLink(
					fbIcon,
					"Facebook",
					"http://www.facebook.com/sharer.php?u={{url}}",
				),
			},
		],
		[
			"x",
			{
				html: createSocialMediaLink(
					xIcon,
					"X",
					"https://twitter.com/intent/tweet?url={{url}}&text={{text}}",
				),
			},
		],
		[
			"linkedin",
			{
				html: createSocialMediaLink(
					liIcon,
					"LinkedIn",
					"https://www.linkedin.com/feed/?shareActive=true&text={{text}} {{url}}",
				),
			},
		],
		[
			"email",
			{
				html: createSocialMediaLink(
					emailIcon,
					"Email",
					"mailto:?subject=Check out {{text}}&body={{text}} {{url}}",
				),
			},
		],
		[
			"whatsapp",
			{
				html: createSocialMediaLink(
					whatsappIcon,
					"WhatsApp",
					"https://api.whatsapp.com/send?text={{text}} {{url}}",
				),
			},
		],
		[
			"telegram",
			{
				html: createSocialMediaLink(
					telegramIcon,
					"Telegram",
					"https://t.me/share/url?url={{url}}&text={{text}}",
				),
			},
		],
		["copy", { html: createSocialMediaLink(copyIcon, "copy", "") }],
	]);

	const div = document.createElement("div");
	div.classList.add("popover-inner");
	div.setAttribute("part", "popover-inner");
	const header = document.createElement("header");
	header.setAttribute("part", "header");
	const p = document.createElement("p");
	p.textContent = shareText ? shareText : "Share this link";

	header.appendChild(p);
	div.appendChild(header);

	const parsedNetworks = networks.split(",").map((network) => {
		const trimmedNetwork = network.trim().toLowerCase();
		if (trimmedNetwork === "copy") {
			const btn = document.createElement("button");
			btn.classList.add("social-media", "copy-button");
			btn.setAttribute("aria-label", "Copy link");
			btn.setAttribute("part", "share-link");
			btn.innerHTML = `${copyIcon} ${copiedIcon} <span>Copy link</span>`;
			btn.addEventListener("click", async (e) => {
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
			return btn;
		}
		const networkElement = networksMap.get(trimmedNetwork);
		return networkElement ? networkElement.html : "";
	});

	div.append(...parsedNetworks);
	return div;
}
