---
title: Color
---

# Color customization

## Change button color

Use the `color-button` attribute to change the button's color. Any valid CSS value works.

```html
<share-button color-button="red"></share-button>
```

<div class="sb-container">
    <share-button color-button-bg="red"></share-button>
</div>


You can also change the color of the button's text with `color-button-text`:

```html
<share-button color-button="lch(85% 130.5 140.21)" color-button-text="#000"></share-button>
```

<div class="sb-container">
    <share-button color-button-bg="lch(85% 130.5 140.21)" color-button-text="#000"></share-button>
</div>

## Change popover color

```html
<share-button color-popover-bg="#00DDFF" color-popover-text="#0049B7"></share-button>
```

<div class="sb-container">
    <share-button color-popover-bg="#00DDFF" color-popover-text="#0049B7"></share-button>
</div>

<script setup>
    import {onMounted} from 'vue'

    onMounted(() => {
        import("@royalfig/share-button")
    })
</script>