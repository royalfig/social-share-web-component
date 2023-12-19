
function createFixedPosition(fixed: string | null) {
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

function createCustomStyle(el: HTMLElement,  variable: string)
{
   const value = el.getAttribute(variable);

    if (!value) {
         return "";
    }

    return `--${variable}: ${value};`;
}

export function createUserStyles(el: HTMLElement) {
    const fixed = el.getAttribute("fixed");
    const position = createFixedPosition(fixed);

    const colorButton = createCustomStyle(el, "color-button-text");
    const colorBg = createCustomStyle(el, "color-button");
  
    const styles = document.createElement("style");

    styles.textContent = `
    button {
        ${position}
        ${colorButton}
        ${colorBg}
    }

    dialog {

    }
    `

    return styles;
}