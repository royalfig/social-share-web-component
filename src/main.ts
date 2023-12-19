import style from "./style.css?inline";
import { icons } from "./icons";
import { createDialogEl } from "./dialog";
import { createUserStyles } from "./user-styles";

const styles = document.createElement("style");
styles.textContent = style;

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
    const darkMode = this.getAttribute("dark-mode");
    
    let darkModeStyles = document.createElement('style');
    if (!darkMode || darkMode === "true") {
      darkModeStyles.textContent = `@media (prefers-color-scheme: dark) {
        .wrapper {
          --color-border: hsl(0deg 0% 18% / 56.9%);
          --color-surface: hsl(0deg 0% 0%);
          --color-element: hsl(0deg 0% 100%);
          --color-button: var(--color-element);
          --color-button-text: var(--color-surface);
          --color-backdrop: rgb(0 0 0 / 50%);
        }
      }`
    }

    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "wrapper");
    wrapper.append(button, dialog);

    shadow.append(styles, darkModeStyles, userStyles, wrapper);
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
