<script setup>
import { onMounted } from "vue";
onMounted(() => {
  const share = document.querySelector("#share");
  const toggle = document.querySelector("#toggle");

  toggle.addEventListener("click", () => {
    const state = share.getAttribute("dark-mode");

    if (state === "true") {
      share.setAttribute("dark-mode", "false");
    } else {
      share.setAttribute("dark-mode", "true");
    }
  });
});
</script>

<template>
  <div class="sb-container">
    <share-button id="share"></share-button>
    <button class="sb-button" id="toggle">Toggle dark mode</button>
  </div>
</template>
