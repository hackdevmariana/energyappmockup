<template>
  <div class="energy-box">
    <div class="icons-row">
      <i class="fa-solid fa-solar-panel solar-icon"></i> 
      <div class="energy-arrows">
        <span v-for="n in 5" :key="n" class="arrow"
          :style="{ opacity: activeArrow === n ? '1' : activeArrow - 1 === n || activeArrow + 1 === n ? '0.7' : '0.4' }">
          <i class="bi bi-caret-right-fill"></i>
        </span>
      </div>
      <i class="fa-solid fa-battery-full battery-icon"></i> 
    </div>

    <div class="energy-info"> 
      <div class="label">Energía almacenada:</div>
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
  background-color: var(--primary-color); /* 🔹 Fondo diferenciado */
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

.solar-icon {
  font-size: 1.8rem; 
}

.battery-icon {
  font-size: 1.6rem;
}

.energy-arrows {
  display: flex;
  gap: 6px; /* 🔹 Igualamos el espacio con otros componentes */
}

.arrow {
  font-size: 1.3rem;
  color: rgba(var(--text-color-rgb), 1);
  transition: opacity 0.4s ease-in-out;
}

.energy-info {
  display: flex;
  justify-content: center;
  gap: 8px;
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
