<template>
  <div class="energy-box">
    <div class="icons-row">
      <i class="bi bi-sun sun-icon"></i>
      <div class="energy-arrows">
        <span v-for="n in 5" :key="n" class="arrow"
          :style="{ opacity: activeArrow === n ? '1' : activeArrow - 1 === n || activeArrow + 1 === n ? '0.7' : '0.4' }">
          <i class="bi bi-chevron-right"></i>
        </span>
      </div>
      <i class="bi bi-house house-icon"></i>
    </div>

    <div class="energy-info"> <!-- 🔹 Agrupamos en un `div` con `display: flex;` -->
      <div class="label">Energía generada:</div>
      <div class="value">{{ formattedEnergy }} kWh</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const props = defineProps({ energy: Number });

const formattedEnergy = computed(() => String(props.energy).replace(".", ","));

// 🔹 Animación de flechas progresiva
const activeArrow = ref(1);
onMounted(() => {
  setInterval(() => {
    activeArrow.value = activeArrow.value === 5 ? 1 : activeArrow.value + 1;
  }, 700);
});
</script>

<style scoped>
.energy-box {
  margin-top: 10px;
  background-color: var(--secondary-color);
  padding: 8px; 
  border: 1px solid var(--text-color);
  border-radius: 10px;
  text-align: center;
}

.icons-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px; 
}

.sun-icon {
  font-size: 1.8rem; 
}

.house-icon {
  font-size: 1.6rem;
}

.energy-arrows {
  display: flex;
  gap: 3px;
}

.arrow {
  font-size: 1.3rem;
  color: rgba(var(--text-color-rgb), 1);
  transition: opacity 0.4s ease-in-out;
}

.energy-info {
  display: flex;
  justify-content: center; /* 🔹 Alineamos los elementos en una sola línea */
  gap: 8px; /* 🔹 Espaciado entre el texto y el valor */
  align-items: center; 
}

.label {
  font-family: var(--font-general);
  font-size: 1.4rem;
}

.value {
  font-family: var(--font-featured);
  font-size: 1.6rem;
}
</style>
