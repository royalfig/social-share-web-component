import { defineConfig } from "vitepress";
// https://vitepress.dev/reference/site-config

export default defineConfig({
  base: "/share-button/",
  vue: {
    template: {
      compilerOptions: {
        // treat all tags with a dash as custom elements
        isCustomElement: (tag) => tag.includes("-"),
      },
    },
  },
  cleanUrls: true,
  title: "Share Button ",
  description: "A custom web component for seamless sharing",
  head: [
    [
      "link",
      { rel: "icon", href: "/share-button/icon.avif", type: "image/avif" },
    ],
  ],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: { provider: "local" },
    externalLinkIcon: true,
    footer: {
      copyright: `&copy; ${new Date().getFullYear()} <a href="https://ryanfeigenbaum.com" target="_blank">Ryan Feigenbaum</a>`,
      message: "Released under the MIT License",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Install", link: "/install" },
    ],

    sidebar: [
      {
        text: "Get started",
        items: [
          { text: "Install", link: "/install" },
          { text: "Basic usage", link: "/basics" },
        ],
      },
      {
        text: "Customization",
        items: [
          { text: "Attributes", link: "/customization/attributes" },
          { text: "Dark mode", link: "/customization/dark-mode" },
          { text: "Advanced", link: "/customization/advanced" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/royalfig/share-button" },
      { icon: "x", link: "https://twitter.com/theroyalfig/" },
      { icon: "mastodon", link: "https://mastodon.social/@royalfig" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/ryanfeigenbaum/"},
    ],
  },
});
