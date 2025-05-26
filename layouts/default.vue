<script setup>
import { useTheme } from "@/composables/useTheme.js";

const { colorMode } = useTheme();

// Aplica el tema al cargar el layout
if (import.meta.client) { 
  colorMode.preference = localStorage.getItem("theme") || colorMode.preference;
}
</script>

<template>
  <div class="page-container" :class="{ 'dark-mode': colorMode.preference === 'dark' }">
    <Navbar />
    <DividingLine />
    <slot />
    <div class="spacer"></div>
    <BottonNav />
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--background-color);
  color: var(--text-color);
}

.spacer {
  height: 100px;
}
</style>
