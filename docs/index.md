---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Share Button "
  text: "A custom web component for seamless sharing"
  tagline: Shout it from the mountaintop
  image: 
    src: /galaxy.avif
    alt: Social media logos with a circle divided into three to represent sharing
  actions:
    - theme: brand
      icon: arrow
      text: Get started
      link: /install
    - theme: alt
      text: Customization
      link: /customization/attributes

features:
  - icon: 🛠️
    title: Built on web standards
    details: Use this custom web component anywhere
  - icon: 😴
    title: Easy enough to use, you can do it in your sleep
    details: xxx
  - icon: 👁️
    title: No tracking
    details: Don't let them watch you (more)
  - icon: 💅
    title: Fully customizable
    details: Great out of the box defaults with the ability to make the button look however you want
---

<style>
  :root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(120deg in oklch, #EA8824, #8FA402, #F02C69, #BE16FD, #370E9F  );
}
</style>