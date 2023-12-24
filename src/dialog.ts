import { xIcon, fbIcon, liIcon, copyIcon, copiedIcon } from "./icons";
import { renderPreview } from "./preview";

export function createDialogEl({
	url,
	title,
	img,
	shareText,
}: Record<string, string>) {
	return `
  <header>
    <p>${shareText}</p>
    <button class="close-button">
      <svg viewBox="0 0 24 24"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z" fill="currentColor"></path></svg>
    </button>
  </header>
  <div class="dialog-body">
    <div class="share-links">
      <a
        class='social-media twitter'
        href='https://twitter.com/intent/tweet?text=${encodeURI(url)}'
        aria-label='Share on Twitter'
        target='_blank'
        rel='noopener noreferrer'
      >${xIcon}
        Twitter</a>
      <a
        class='social-media linkedin'
        href='http://www.linkedin.com/shareArticle?mini=true&amp;url=${encodeURI(
					url,
				)}'
        aria-label='Share on LinkedIn'
        target='_blank'
        rel='noopener noreferrer'
      >${liIcon}
        Linkedin</a>
      <a
        class='social-media facebook'
        href='http://www.facebook.com/sharer.php?u=${encodeURI(url)}'
        aria-label='Share on Facebook'
        target='_blank'
        rel='noopener noreferrer'
      >${fbIcon}
        Facebook</a>
      <button class='social-media copy-button' aria-label='Copy link'>
        ${copyIcon}
        ${copiedIcon}
        <span>Copy link</span>
      </button>
    </div>
    ${renderPreview({ title, img })}
  </div>`;
}
