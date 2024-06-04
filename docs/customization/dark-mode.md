---
title: Dark mode
---

# Dark mode

Out of the box, the share button will respect the user's system preference, using dark mode when dark mode is preferred and vice versa.

## Disable dark mode

To disable dark mode altogether, set the `dark-mode` attribute to false:

```html
<share-button dark-mode="false"></share-button>
```

<div class="sb-container">
    <share-button dark-mode="false"></share-button>
</div>

## Disable light mode

To disable light mode, set the `dark-mode` attribute to `true`.

```html
<share-button></share-button>
```

<div class="sb-container">
    <share-button dark-mode="true"></share-button>
</div>

## Toggle dark mode

If you site has a dark mode toggle, you can also control the button's dark mode by updating the `dark-mode` attribute in line with the site.

<div class="sb-container">
    <share-button id="share"></share-button>
    <button class="sb-button" id="toggle">Toggle dark mode</button>
</div>



<script setup>
    import {onMounted} from 'vue'

    onMounted(() => {

        const share = document.querySelector("#share");
        const toggle = document.querySelector("#toggle");

        toggle.addEventListener("click", () => {
        const state = share.getAttribute("dark-mode");

        if (state === "true") {
            share.setAttribute("dark-mode", "false");
        } else {
            share.setAttribute("dark-mode", "true");
        }
        });
    })
</script>
