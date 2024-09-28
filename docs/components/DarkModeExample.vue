<script setup>
import { useTemplateRef } from "vue";
const share = useTemplateRef("share");
const toggle = useTemplateRef("toggle");

function toggleDarkMode() {
  const state = share.value.getAttribute("dark-mode");

  if (state === "true") {
    share.value.setAttribute("dark-mode", "false");
  } else {
    share.value.setAttribute("dark-mode", "true");
  }
}
</script>

<template>
  <div class="sb-container">
    <share-button ref="share"></share-button>
    <button class="sb-button" @click="toggleDarkMode">Toggle dark mode</button>
  </div>
</template>
