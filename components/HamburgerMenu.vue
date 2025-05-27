<template>
  <div class="hamburger-wrapper">
    <button class="hamburger-btn" @click="toggleMenu">
      <i class="bi bi-list" style="font-size: 1.8rem"></i>
    </button>

    <div v-if="isOpen" class="overlay" @click.self="closeMenu">
      <MenuCard />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import MenuCard from "./MenuCard.vue";

const isOpen = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

function closeMenu() {
  isOpen.value = false;
}
</script>

<style scoped>
.hamburger-wrapper {
  position: relative;
}

.hamburger-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--text-color);
}

.overlay {
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 50;
  background: #1c1c1c;
  border-radius: 10px;
  padding: 0.5rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  z-index: 50;
}
</style>


