<template>
  <NuxtLink v-if="link" :to="link" class="card-link">
    <div class="card" :class="colorClass">
      <p class="tip">{{ tipText }}</p>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  colorClass: { type: String, required: true }, // Clases de color (red, primary, green)
  tipText: { type: String, default: "Hover Me" }, // Texto del primer párrafo
  link: { type: String, default: "" }, // Ruta dentro de la aplicación
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

.card-link {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  color: white;
  text-decoration: none;
  transition: 300ms;
}

.card-link:hover {
  background-color: rgba(255, 255, 255, 0.5);
}

/* Efectos hover */
.card:hover {
  transform: scale(1.1, 1.1);
}

.cards:hover > .card:not(:hover) {
  filter: blur(5px);
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
