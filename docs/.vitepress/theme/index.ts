// .vitepress/theme/index.js
/// <reference types="vite/client" />

import DefaultTheme from 'vitepress/theme'

import './custom.css'

if (!import.meta.env.SSR) {
    import('@royalfig/share-button')
  }

export default DefaultTheme;