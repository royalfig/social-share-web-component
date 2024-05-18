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

function createSocialMediaLink(
	URL: string,
	icon: string,
	network: string,
	shareURL: string,
	text?: string,
) {
	let finalUrl = shareURL.replace(/{{url}}/g, URL);

	if (text) {
		finalUrl = finalUrl.replace(/{{text}}/g, text);
	}

	return `<a
  class='social-media ${network.toLowerCase()}'
  href='${encodeURI(finalUrl)}'
  aria-label='Share on ${network}'
  target='_blank'
  rel='noopener noreferrer'
  part='share-link'
>${icon}
  ${network}</a>`;
}

export function createDialogEl({
	url,
	title,
	shareText,
}: Record<string, string>) {
	return `
  <div class="arrow"></div>
  <div class="popover-inner">
    <header part="header">
      <p>${shareText ? shareText : "Share this link"}</p>
    </header>
    <div class="dialog-body" part="dialog-body">
      <div class="share-links" part="share-links">

        ${createSocialMediaLink(
          url,
          xIcon,
          "X",
          "https://twitter.com/intent/tweet?url={{url}}&text={{text}}",
          title,
        )}  

        ${createSocialMediaLink(
          url,
          liIcon,
          "LinkedIn",
          "https://www.linkedin.com/feed/?shareActive=true&text={{text}} {{url}}",
          title,
        )}
        
        ${createSocialMediaLink(
          url,
          fbIcon,
          "Facebook",
          "http://www.facebook.com/sharer.php?u={{url}}",
        )}
        
        ${createSocialMediaLink(
          url,
          emailIcon,
          "Email",
          "mailto:?subject=Check out {{text}}&body={{text}} {{url}}",
          title,
        )}

        ${createSocialMediaLink(
          url,
          telegramIcon,
          "Telegram",
          "https://t.me/share/url?url={{url}}&text={{text}}",
          title,
        )}

        ${createSocialMediaLink(
          url,
          whatsappIcon,
          "WhatsApp",
          "https://api.whatsapp.com/send?text={{text}} {{url}}",
          title,
        )}

        <button class='social-media copy-button' aria-label='Copy link' part="share-link">
          ${copyIcon}
          ${copiedIcon}
          <span>Copy link</span>
        </button>
      </div>
    </div>
  </div>`;
}
