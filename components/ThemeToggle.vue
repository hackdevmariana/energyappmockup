<script setup>
import { useTheme } from "~/composables/useTheme";
const { theme, toggleTheme } = useTheme();
</script>

<template>
  <label for="theme" class="theme">
    <span class="theme__toggle-wrap">
      <input
        id="theme"
        class="theme__toggle"
        type="checkbox"
        role="switch"
        name="theme"
        :checked="theme === 'dark'"
        @change="toggleTheme"
      />
      <span class="theme__fill"></span>
      <span class="theme__icon">
        <span v-for="i in 9" :key="i" class="theme__icon-part"></span>
      </span>
    </span>
  </label>
</template>

<style scoped>
@import "~/styles/themetoggle.css";
</style>
