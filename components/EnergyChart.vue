<!-- USAGE:

<template>
  <div>
    <h1>Consumo Energético Mensual</h1>
    <EnergyChart 
      :labels="['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']"
      :energyConsumption="[100, 200, 150, 250, 300]"
    />
  </div>
</template>

<script setup>
import EnergyChart from "~/components/EnergyChart.vue";
</script>

-->
<template>
  <div class="chart-container">
    <client-only>
      <v-chart
        class="chart"
        :option="chartOptions"
        :key="chartOptions"
        autoresize
      />
    </client-only>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { use } from "echarts/core";
import VChart from "vue-echarts";
import { LineChart } from "echarts/charts";
import { TooltipComponent, LegendComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

use([LineChart, TooltipComponent, LegendComponent, CanvasRenderer]);

const props = defineProps({
  labels: {
    type: Array,
    default: () => ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
  },
  energyConsumption: {
    type: Array,
    default: () => [120, 150, 180, 220, 260],
  },
});

const chartOptions = computed(() => ({
  tooltip: { trigger: "axis" },
  legend: { data: ["Consumo Energético"] },
  xAxis: { type: "category", data: props.labels }, // Accede a labels desde props
  yAxis: { type: "value" },
  series: [
    {
      name: "Consumo Energético",
      type: "line",
      data: props.energyConsumption, // Accede a energyConsumption desde props
      smooth: true,
      color: "#db2c2c",
    },
  ],
}));
</script>

<style scoped>
.chart-container {
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  border: 2px solid red; /* Debug visual */
}

.chart {
  width: 100%;
  height: 300px;
}
</style>
