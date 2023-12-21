# Sharing Is Caring Web Component

Use this web component to add a button for sharing the current page to social media (Twitter/X, Facebook, LinkedIn) or copying the URL.

## Installation

### Use the CDN

### NPM Package

## Usage

There are two ways to add your share button to the page.

### Custom element

Add the custom element `<share-button></share-button>` anywhere in your HTML to add the share button.

That's it!

The share button is now fully active.

### Injection

If you don't have access to your HTML, then you can use the injection method. When using this method, the button has fixed positioning, meaning that it will float at the bottom left, center, or right of the page.

Initialize injection by adding the `data-fixed` attribute to the script tag along with where you want the button to appear:

```html
<head>
  <!-- Add the button to the bottom left -->
  <script type="module" data-fixed="left"></script>

  <!-- Add the button to the bottom center -->
  <script type="module" data-fixed="center"></script>

  <!-- Add the button to the bottom right -->
  <script type="module" data-fixed="right"></script>
</head>
```

## Customization

The share button comes with great default styles out of the box, including support for dark mode (when the user's OS preference is set to dark mode).

But it's also possible to define custom styles using attributes. The attribute names are the same; however, when using the injection method, they're prefixed with `data-` to comply with HTML standards.

| Attribute | Description | Default value |
| --- | --- | ---|
| `color-border` | Border color on share dialog | |
| `color-surface` | Share dialog background color | |
| `color-element` | Share dialog text and icon color | |
| `color-button` | Button background color | |
| `color-button-text` | Button text color | |
| `color-backdrop` | The blurred dialog background color | |
| `position` | Where ... | |


### Dark mode customization
