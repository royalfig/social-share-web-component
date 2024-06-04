# Advanced customization

When the customization offered by attributes isn't enough, you can take the wheel with CSS and the `part` selector.

## Part selector 

Because the share button is a custom element and uses the shadow DOM, it's not accessible via standard CSS selectors. Generally, this is beneficial because it means that your site's styling won't interfere with the share button and vice versa.

But when you need a bit more control, the part selector has your back. Here's the basic sytnax:

```css
::part(part-name) {
    ...
}
```

