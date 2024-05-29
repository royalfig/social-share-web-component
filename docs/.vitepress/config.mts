
import { defineConfig } from "vitepress";
// https://vitepress.dev/reference/site-config

export default defineConfig({
  base: "/share-button/",
  vue: {
    template: {
      compilerOptions: {
        // treat all tags with a dash as custom elements
        isCustomElement: (tag) => tag.includes('-')
      }
    }
  },

  
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
		]
	],
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
					{ text: "Basic usage", link: "/basics" },
					{ text: "Install", link: "/install" },
				],
			},
			{
				text: "Customization",
				items: [
					{ text: "Attributes", link: "customization/attributes" },
					{ text: "Parts", link: "customization/parts" },
					{ text: "Dark Mode", link: "customization/dark-mode" },
				],
			},
			{
				text: "Examples",
				items: [
					{ text: "Color", link: "/examples/color" },
					{ text: "Text", link: "/examples/text" },
					{ text: "Networks", link: "/examples/networks" },
					{ text: "Icons only", link: "/examples/atomic" },
				],
			},
		],

		socialLinks: [
			{ icon: "github", link: "https://github.com/royalfig/share-button" },
		],
	},
});
