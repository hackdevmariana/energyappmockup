<template>
  <component
    :is="link ? NuxtLink : 'div'"
    :to="link || undefined"
    class="card-link"
  >
    <div class="card" :class="colorClass">
      <p class="tip">{{ tipText }}</p>
    </div>
  </component>
</template>

<script setup>
import { NuxtLink } from "#components";

defineProps({
  colorClass: { type: String, required: true },
  tipText: { type: String, default: "Hover Me" },
  link: { type: String, default: "" },
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
  border-radius: 5px;
  color: var(--text-color);
  text-decoration: none;
  transition: 300ms;
}

.card-link:hover {
  background-color: rgba(255, 255, 255, 0.5);
}

.card:hover {
  transform: scale(1.1, 1.1);
}

.cards:hover > .card:not(:hover) {
  filter: blur(5px);
  transform: scale(0.9, 0.9);
}

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

.negate {
  background-color: var(--text-color);
  color: var(--background-color);
}
</style>
