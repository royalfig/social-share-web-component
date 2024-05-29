---
title: Customize text
---

# Customize text

Add text between the `share-button` tags to make your button say whatever you want. The button falls back to "Share" as its default text.

```html
<share-button>Share on the web</share-button>
```

<div class="sb-container">  
<share-button>Share on the web</share-button>
</div>

## Icon button

To omit text altogether, use the `circle` attribute. The button will render without text and become round to maintain its styling. 


<div class="sb-container">
    <share-button circle></share-button>
</div>

::: tip Icon
Use the [`icon`](/examples/icon.md) attribute to change the icon.
:::

<script>
    import "@royalfig/share-button"
</script>