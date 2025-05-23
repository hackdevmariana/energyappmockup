<!-- 
 USAGE:
 
 <EnergyButton text="Ver consumo" url="/energy-dashboard" />
-->

<template>
  <button class="energy-button" @click="navigate">
    {{ text }}
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
  background-color: #ffcc00; /* Color energía */
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.energy-button:hover {
  background-color: #ffaa00;
}
</style>
