<template>
  <div>
    <br /><br />

    <PowerGridStatus generation="120" consumption="110" stability="Estable" />
    <RenewableEnergyMix
      :data="[
        { name: 'Solar', value: 45 },
        { name: 'Eólica', value: 30 },
        { name: 'Hidráulica', value: 15 },
        { name: 'Biomasa', value: 10 },
      ]"
    />
    <ConsumptionHistoryChart
      :labels="['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']"
      :consumption="[120, 135, 110, 145, 160, 155]"
    />

    <SelfConsumptionChart
      :data="[
        { name: 'Autoconsumo', value: 70 },
        { name: 'Excedente vertido', value: 30 },
      ]"
    />
    <UserComparisonChart
      :users="['Tú', 'Usuario A', 'Usuario B', 'Usuario C']"
      :consumption="[150, 200, 180, 220]"
    />

    <EnergyConsumptionChart
      :labels="['00:00', '06:00', '12:00', '18:00', '24:00']"
      :consumption="[0.4, 0.8, 1.2, 1.1, 0.5]"
    />

    <h1>Consumo energético mensual</h1>
    <EnergyChart
      :labels="['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']"
      :energyConsumption="[100, 200, 150, 250, 300]"
    />

    <h1>Diferencia energética</h1>
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
    <h1>Ahorro energético</h1>
    <EnergySavingsChart
      :labels="[
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado',
        'Domingo',
      ]"
      :marketPrice="[0.15, 0.18, 0.2, 0.17, 0.16, 0.19, 0.21]"
      :userPrice="[0.08, 0.09, 0.1, 0.07, 0.09, 0.08, 0.1]"
    />
  </div>
</template>
<script setup>
import EnergyChart from "~/components/EnergyChart.vue";
import EnergyDifferenceChart from "~/components/EnergyDifferenceChart.vue";
import EnergySavingsChart from "~/components/EnergySavingsChart.vue";
import EnergyConsumptionChart from "~/components/EnergyConsumptionChart.vue";
import ConsumptionHistoryChart from "~/components/ConsumptionHistoryChart.vue";
import PowerGridStatus from "~/components/PowerGridStatus.vue";
import RenewableEnergyMix from "~/components/RenewableEnergyMix.vue";

definePageMeta({
  layout: "default",
});
</script>
