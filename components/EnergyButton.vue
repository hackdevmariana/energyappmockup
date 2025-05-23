<template>
  <button class="energy-button" @click="navigate">
    <span>{{ text }}</span>
  </button>
</template>

<script setup>
import { useRouter } from "vue-router";

defineProps({
  text: String,
  url: String
});

const router = useRouter();

const navigate = () => {
  if (url) {
    router.push(url);
  }
};
</script>

<style scoped>
.energy-button {
  background: linear-gradient(135deg, var(--secondary-color), #ff8800); /* Gradiente moderno */
  border: none;
  padding: 14px 22px;
  font-size: 16px;
  font-weight: bold;
  color: var(--no-black);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Sombra elegante */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.energy-button:hover {
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3);
  transform: translateY(-2px);
}

.energy-button:active {
  transform: translateY(2px); /* Efecto de presión */
}
</style>
