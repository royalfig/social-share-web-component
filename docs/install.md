---
title: Install the share button
---

# Installation

There are two recommended methods for installing the share button. Use the [first installation method](#install-via-npm) you're using a bundler to compile your code and the second when you're dropping a script on your page.

## Install via NPM

Useful when...

1. Install the package

```bash
npm install @royalfig/share-button
```

2. Import the package

```js
import "@royalfig/share-button";
```

## Use the latest release

Download the latest release and copy the code into your site.

<div class="sb-container">
    <a class="sb-button" :href="data.download" download>Download</a>
    <button class="sb-button" @click="copy">Copy</button>
</div>




## Use with Ghost

To load the share button on a [Ghost](https://ghost.org/) site, use the [latest release](#use-the-latest-release) method above.

Specifically, open **Settings** &rarr; **Code Injection**. In the **Site Header**, add a `script` tag and paste in the code from the previous step.

Then, you can use an HTML card and the `<share-button></share-button>` element anywhere in your post.

If you want a button that floats on any page, add the share button to **Code Injection** &rarr; **Site Footer** with the `position` attribute.

```html
<share-button position="left"></share-button>
```

<script setup>

import {data} from "./src/release.data.ts"

function copy() {
    navigator.clipboard.writeText(data.code).then(() => {
        const button = document.querySelector('button.sb-button')
        button.style.color = 'green'
        button.textContent = 'Copied!'

        setTimeout(() => {
            button.style.color = "initial";
            button.textContent = "Copy"
        },  3000)
    })
}

</script>