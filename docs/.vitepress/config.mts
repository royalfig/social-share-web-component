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
      "style",
      {},
      ` .sb-container {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
      padding: 2rem;
      border: 1px solid var(--vp-c-divider);
      border-radius: 8px;
  }`,
    ],
  ],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: { provider: "local" },
    externalLinkIcon: true,
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
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
          { text: "Attributes", link: "customization/attributes" },
          { text: "Dark mode", link: "customization/dark-mode" },
          { text: "Advanced", link: "customization/advanced" },
        ],
      },
      {
        text: "Examples",
        items: [
          { text: "Color", link: "/examples/color" },
          { text: "Text", link: "/examples/text" },
          { text: "Networks", link: "/examples/networks" },
          { text: "Icons only", link: "/examples/atomic" },
          { text: "Floating", link: "/examples/floating" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/royalfig/share-button" },
    ],
  },
});
