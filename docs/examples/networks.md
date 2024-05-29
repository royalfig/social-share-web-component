---
title: Networks
---

# Networks

You can specify which social networks your share button shows as well as their order.

Available networks include:
- X (formerly Twitter)
- LinkedIn
- Facebook
- Email (opens an email client if configured)
- WhatsApp
- Telegram
- Copy link (copies the current URL to the user's clipboard)

By default, all options will be present, in the order above.

To customize networks and their order, use the `networks` attribute and pass in the desired networks in a comma-separated list. Networks will appear in the same order as entered.

```html
<share-button networks="email,copy,facebook"></share-button>
```

<div class="sb-container">
    <share-button networks="email,copy,facebook"></share-button>
</div>

::: tip Hey there!
Don't see a network you want to use? File a GitHub issue to get it added!
:::

<script setup>
    import {onMounted} from 'vue'

    onMounted(() => {
        import("@royalfig/share-button")
    })
</script>