<template>
  <div class="contenedor">
    <h2>Demanda eléctrica de hoy</h2>
    <div class="grid">
      <AnimatedContainer
        topLine="Demanda Real"
        :quantity="realDemand ? realDemand + ' MW' : 'Cargando...'"
        bottomLine="MW"
        backgroundColor="var(--secondary-color)"
      />
      <AnimatedContainer
        topLine="Demanda Prevista"
        :quantity="forecastDemand ? forecastDemand + ' MW' : 'Cargando...'"
        bottomLine="MW"
        backgroundColor="var(--income-color)"
      />
      <AnimatedContainer
        topLine="Demanda Programada"
        :quantity="scheduledDemand ? scheduledDemand + ' MW' : 'Cargando...'"
        bottomLine="MW"
        backgroundColor="var(--expenses-color)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AnimatedContainer from '@/components/AnimatedContainer.vue';

const realDemand = ref(null);
const forecastDemand = ref(null);
const scheduledDemand = ref(null);

const fetchDemandData = async () => {
  try {
    const response = await fetch("https://www.esios.ree.es/es/generacion-y-consumo");
    const data = await response.json();

    realDemand.value = data.real_demand; // Demanda real
    forecastDemand.value = data.forecast_demand; // Demanda prevista
    scheduledDemand.value = data.scheduled_demand; // Demanda programada
  } catch (error) {
    console.error("Error al obtener los datos de demanda:", error);
  }
};

onMounted(fetchDemandData);
</script>

<style scoped>
.contenedor {
  width: 90%;
  margin: 0 auto;
  text-align: center;
}

.grid {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
</style>
