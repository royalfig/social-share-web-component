// vite config to build web component
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'my-component',
      formats: ['es', 'umd']
    },
   
  }
})