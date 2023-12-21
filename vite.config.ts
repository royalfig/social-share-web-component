// vite config to build web component
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    minify: true,
    lib: {
      entry: "src/main.ts",
      name: "my-component",
      formats: ["es", "umd"],
    },
  },
});
