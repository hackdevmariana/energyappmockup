<template>
  <div class="card" :class="colorClass">
    <p class="tip">{{ tipText }}</p>
    <p class="second-text">{{ secondText }}</p>
  </div>
</template>

<script setup>
defineProps({
  colorClass: { type: String, required: true }, // Clases para el color (red, primary, green)
  tipText: { type: String, default: "Hover Me" }, // Texto del primer párrafo
  secondText: { type: String, default: "Lorem Ipsum" }, // Texto del segundo párrafo
});
</script>

<style scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 100px;
  width: 250px;
  border-radius: 10px;
  color: var(--text-color);
  cursor: pointer;
  transition: 400ms;
}

.card p.tip {
  font-size: 1em;
  font-weight: 700;
}

.card p.second-text {
  font-size: 0.7em;
}

.card:hover {
  transform: scale(1.1, 1.1);
}

.cards:hover > .card:not(:hover) {
  filter: blur(50px);
  transform: scale(0.9, 0.9);
}

/* Colores dinámicos */
.red {
  background-color: var(--expenses-color);
}

.primary {
  background-color: var(--primary-color);
}

.secondary {
  background-color: var(--secondary-color);
}

.green {
  background-color: var(--income-color);
}
</style>
