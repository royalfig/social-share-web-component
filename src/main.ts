import style from "./style.css?inline";
const styles = document.createElement("style");
styles.textContent = style;

const icons: Record<string, string> = {
  1: `<svg viewBox="0 0 24 24"><path d="M9 3V5H4V19H20V10H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H9ZM16 5V1L23 7H14C12.8954 7 12 7.89543 12 9V15H10V9C10 6.79086 11.7909 5 14 5H16Z"></path></svg>`,
  2: `<svg viewBox="0 0 24 24"><path d="M13.5759 17.2714L8.46576 14.484C7.83312 15.112 6.96187 15.5 6 15.5C4.067 15.5 2.5 13.933 2.5 12C2.5 10.067 4.067 8.5 6 8.5C6.96181 8.5 7.83301 8.88796 8.46564 9.51593L13.5759 6.72855C13.5262 6.49354 13.5 6.24983 13.5 6C13.5 4.067 15.067 2.5 17 2.5C18.933 2.5 20.5 4.067 20.5 6C20.5 7.933 18.933 9.5 17 9.5C16.0381 9.5 15.1669 9.11201 14.5343 8.48399L9.42404 11.2713C9.47382 11.5064 9.5 11.7501 9.5 12C9.5 12.2498 9.47383 12.4935 9.42408 12.7285L14.5343 15.516C15.167 14.888 16.0382 14.5 17 14.5C18.933 14.5 20.5 16.067 20.5 18C20.5 19.933 18.933 21.5 17 21.5C15.067 21.5 13.5 19.933 13.5 18C13.5 17.7502 13.5262 17.5064 13.5759 17.2714Z"></path></svg>`,
  3: `<svg viewBox="0 0 24 24"><path d="M18.4144 9.00015L12.0002 2.58594L5.58594 9.00015H11V16H13V9.00015H18.4144ZM3 14V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V14H19V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V14H3Z"></path></svg>`,
  4: `<svg viewBox="0 0 24 24"><path d="M10 3V5H5V19H19V14H21V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H10ZM17.7071 7.70711L12 13.4142L10.5858 12L16.2929 6.29289L13 3H21V11L17.7071 7.70711Z"></path></svg>`,
  5: `<svg viewBox="0 0 24 24"><path d="M11 2.04938V4.06189C7.05369 4.55399 4 7.92038 4 12C4 16.4183 7.58172 20 12 20C16.0796 20 19.446 16.9463 19.9381 13H21.9506C21.4489 18.0533 17.1853 22 12 22C6.47715 22 2 17.5228 2 12C2 6.81465 5.94668 2.5511 11 2.04938ZM18.7071 6.70711L12 13.4142L10.5858 12L17.2929 5.29289L14 2H22V10L18.7071 6.70711Z"></path></svg>`,
  6: `<svg viewBox="0 0 24 24"><path d="M13 14H11C7.54202 14 4.53953 15.9502 3.03239 18.8107C3.01093 18.5433 3 18.2729 3 18C3 12.4772 7.47715 8 13 8V3L23 11L13 19V14Z"></path></svg>`,
  7: `<svg viewBox="0 0 24 24"><path d="M4 19H20V14H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V14H4V19ZM12 10H9C7.00442 10 5.23638 10.9742 4.14556 12.473C4.85831 8.78512 8.10391 6 12 6V2L20 8L12 14V10Z"></path></svg>`,
};

const xIcon = `<svg viewBox="0 0 24 24"><path d="M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z"></path></svg>`;

const fbIcon = `<svg viewBox="0 0 24 24"><path d="M15.4024 21V14.0344H17.7347L18.0838 11.3265H15.4024V9.59765C15.4024 8.81364 15.62 8.27934 16.7443 8.27934L18.1783 8.27867V5.85676C17.9302 5.82382 17.0791 5.75006 16.0888 5.75006C14.0213 5.75006 12.606 7.01198 12.606 9.32952V11.3265H10.2677V14.0344H12.606V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15.4024Z"></path></svg>`;

const liIcon = `<svg viewBox="0 0 24 24"><path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path></svg>`;

const copyIcon = `<svg viewBox="0 0 24 24"><path d="M7 4V2H17V4H20.0066C20.5552 4 21 4.44495 21 4.9934V21.0066C21 21.5552 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5551 3 21.0066V4.9934C3 4.44476 3.44495 4 3.9934 4H7ZM7 6H5V20H19V6H17V8H7V6ZM9 4V6H15V4H9Z"></path></svg>`;

const copiedIcon = `<svg viewBox="0 0 24 24"><path d="M6 4V8H18V4H20.0066C20.5552 4 21 4.44495 21 4.9934V21.0066C21 21.5552 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5551 3 21.0066V4.9934C3 4.44476 3.44495 4 3.9934 4H6ZM8 2H16V6H8V2Z"></path></svg>`;

type UserStyleOptions = Record<string, string>;

function createFixedPosition(fixed: string) {
  const distance = "20px";
  const fixedPosition = `position: fixed; bottom: ${distance};`;

  if (!fixed) {
    return "";
  }

  const fixLowercase = fixed.toLowerCase();

  if (fixLowercase === "left" || fixLowercase === "right") {
    return `${fixedPosition} ${fixLowercase}: ${distance}`;
  }

  if (fixLowercase === "center") {
    return `${fixedPosition} left: 50%; translate: -50% 0;`;
  }

  console.error(
    `[Share Link] It looks you specified an unknown value (${fixed}) for the fixed attribute. Available options are "left," "right," and "center"`
  );
  return "";
}

function createUserStyle({
  br,
  bg,
  color,
  p,
  font,
  textTransform,
  fixedPosition,
}: UserStyleOptions) {
  const fixed = createFixedPosition(fixedPosition);
  return `border-radius: ${br}; background-color: ${bg}; color: ${color}; padding: ${p}; font-family: ${font}; text-transform: ${textTransform}; ${fixed}`;
}

function renderDialog({ url, title, img }: Record<string, string>) {
  return `
  <header>
    <p>Share this post</p>
    <button class="close-button">
      <svg viewBox="0 0 24 24"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z" fill="currentColor"></path></svg>
    </button>
  </header>
  <div class="dialog-body">
    <div class="share-links">
      <a
        class='social-media'
        href='https://twitter.com/intent/tweet?text=${encodeURI(url)}'
        aria-label='Share on Twitter'
        target='_blank'
        rel='noopener noreferrer'
      >${xIcon}
        Twitter</a>
      <a
        class='social-media'
        href='http://www.linkedin.com/shareArticle?mini=true&amp;url=${encodeURI(
          url
        )}'
        aria-label='Share on LinkedIn'
        target='_blank'
        rel='noopener noreferrer'
      >${liIcon}
        Linkedin</a>
      <a
        class='social-media'
        href='http://www.facebook.com/sharer.php?u=${encodeURI(url)}'
        aria-label='Share on Facebook'
        target='_blank'
        rel='noopener noreferrer'
      >${fbIcon}
        Facebook</a>
      <button class='social-media' aria-label='Copy link'>
        ${copyIcon}
        ${copiedIcon}
        <span>Copy link</span>
      </button>
    </div>
    <div class="preview-container">
        <div class="preview">
            ${title ? `<p>${title}</p>` : ""}
            ${img ? `<img src="${img}" alt="${title}" >` : ""}
        </div>
    </div>
  </div>`;
}

class ShareButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const title = document.querySelector("title")?.textContent || "";
    const ogImage =
      document
        .querySelector('meta[property="og:image"]')
        ?.getAttribute("content") || "";

    const shadow = this.attachShadow({ mode: "open" });

    // icon
    const iconChoice = this.getAttribute("icon") || "1";
    const icon = icons[iconChoice];

    // user styles
    const br = this.getAttribute("border-radius") || "6px";
    const bg = this.getAttribute("background") || "#000";
    const color = this.getAttribute("color") || "#fff";
    const p = this.getAttribute("padding") || "6px 8px";
    const font = this.getAttribute("font") || "system-ui, sans-serif";
    const textTransform = this.getAttribute("text-transform") || "uppercase";

    //fixed
    const fixedPosition = this.getAttribute("fixed") || "";

    const userStyle = createUserStyle({
      br,
      bg,
      color,
      p,
      font,
      textTransform,
      fixedPosition,
    });

    // dialog
    const dialog = document.createElement("dialog");
    const dialogContent = renderDialog({
      url: window.location.href,
      title,
      img: ogImage,
    });
    dialog.innerHTML = dialogContent;
    const closeButton = dialog.querySelector(".close-button");
    closeButton?.addEventListener("click", () => {
      dialog.close();
    });

    // copyb button
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

    button.innerHTML = buttonText + icon;
    button.addEventListener("click", () => {
      dialog.showModal();
    });
    button.setAttribute("style", userStyle);

    shadow.append(styles, button, dialog);
  }
}

function init() {
  const isInjected = document.querySelector("script[data-inject]");

  if (isInjected) {
    const position = isInjected.getAttribute("data-inject");
    
    if (!position) {
      console.error(
        `[Share Link] It looks like you did not specify a position for the button. Please add a data-inject attribute with a value of "left," "right," or "center"`
      );
      return;
    }
    const button = document.createElement("share-button");
    
    // Set attributes
    // button-text="Share" icon="4" fixed="right"
    button.setAttribute("button-text", "Share");
    button.setAttribute("icon", "4");
    button.setAttribute("fixed", position);
    document.body.append(button);

    customElements.define("share-button", ShareButton);

    return;
  }

  customElements.define("share-button", ShareButton);
}

init();
