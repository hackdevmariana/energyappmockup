<template>
  <div class="contenedor">
    <span class="animated-text">{{ text }}</span>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: "Texto animado!",
  },
});
</script>

<style scoped>
.contenedor {
  width: 100vw; /* Ocupa todo el ancho */
  height: 100vh; /* Ocupa todo el alto */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color);
}

.animated-text {
  font-family: var(--font-featured);
  font-size: 3rem;
  color: var(--primary-color);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
}
</style>
