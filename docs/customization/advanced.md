# Advanced customization

When the customization offered by attributes isn't enough, you can take the wheel with CSS and the `part` selector.

## Part selector

Because the share button is a custom element and uses the shadow DOM, it's not accessible via standard CSS selectors. Generally, this is beneficial because it means that your site's styling won't interfere with the share button and vice versa.

But when you need a bit more control, the part selector has your back. Here's the basic sytnax:

```css
::part(part-name) {
  ...;
}
```

All variables are defined on the `wrapper` part, which means you can overwrite them by adding the relevant CSS to your site.

For example, to change the button's background color, change the variable's value:

```css
::part(share-wrapper) {
  --color-button-bg: #f88;
}
```

This technique is used to change the color of the button below.

<style>
    #part-test::part(share-wrapper) {
        --color-button-bg: #f88;
    }
</style>

<div class="sb-container"> 
    <share-button id="part-test"></share-button>
</div>

## Parts

| Part                         | Description                              |
| ---------------------------- | ---------------------------------------- |
| `::part(share-wrapper)`      | A container around the whole component   |
| `::part(share-button)`       | The button element                       |
| `::part(share-popover)`      | The popover outer container              |
| `::part(share-social-media)` | The container for the social media links |
| `::part(share-link)`         | The social media link                    |

## Advanced dark mode customization

The most common use case for advanced customization is when you want to customize the automatic dark mode color palette. The only way to do this is to add a CSS rule that targets the relevant CSS variables.

```css
@media (prefers-color-scheme: dark) {
  ::part(share-wrapper) {
    --color-button-bg: hsl(242deg 9.58% 98%);
    --color-button-text: hsl(242deg 55.5% 2.74%);
    --color-copy-success: hsl(120deg 99% 43%);
    --color-popover-bg: hsl(242deg 55.5% 2.74%);
    --color-popover-bg-accent: hsl(242deg 55.5% 12.74%);
    --color-popover-text: hsl(242deg 9.58% 98%);
  }
}
```
