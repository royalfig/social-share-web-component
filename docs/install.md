---
title: Install Share Button
---

# How To Install

The share button etc.

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

<a :href="data.download" download>Download</a>

<button @click="copy">Copy</button>

<script setup>
import {data} from "./src/release.data.ts"
function copy() {
    navigator.clipboard.writeText(data.code).then(() => console.log('copied'))
}

</script>
