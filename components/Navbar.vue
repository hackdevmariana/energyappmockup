<script setup>
import { useTheme } from "~/composables/useTheme";
const { theme, toggleTheme } = useTheme();
</script>

<template>
  <nav>
    <button @click="toggleTheme">
      Cambiar a {{ theme === "light" ? "oscuro" : "claro" }}
    </button>
  </nav>
</template>
