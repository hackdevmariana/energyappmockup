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
    </div>
  </div>
</template>

<script setup>
import EnergyChart from "~/components/EnergyChart.vue";
import TestChart from "~/components/TestChart.vue";

definePageMeta({
  layout: "default",
});
</script>
