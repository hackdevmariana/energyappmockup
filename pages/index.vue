<template>
  <div>
    <br /><br />
    <AnimatedContainer
      topLine="Saldo"
      quantity="1000"
      bottomLine="euros"
      backgroundColor="var(--expenses-color)"
    />

    <div>
      <h1>Consumo Energético Mensual</h1>
      <EnergyChart
        :labels="['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']"
        :energyConsumption="[100, 200, 150, 250, 300]"
      />

      <h1>Diferencia Energética</h1>
      <EnergyDifferenceChart
        :labels="[
          'Lunes',
          'Martes',
          'Miércoles',
          'Jueves',
          'Viernes',
          'Sábado',
          'Domingo',
        ]"
        :energyConsumed="[30, 50, 20, 60, 40, 70, 35]"
        :energyProduced="[40, 30, 25, 50, 45, 60, 38]"
      />
    </div>
  </div>
</template>

<script setup>
import EnergyChart from "~/components/EnergyChart.vue";
import EnergyDifferenceChart from "~/components/EnergyDifferenceChart.vue";

definePageMeta({
  layout: "default",
});
</script>
