<!--

USAGE:

<template>
  <div>
    <h1>Diferencia Energética</h1>
    <EnergyDifferenceChart
      :labels="['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']"
      :energyConsumed="[30, 50, 20, 60, 40, 70, 35]"
      :energyProduced="[40, 30, 25, 50, 45, 60, 38]"
    />
  </div>
</template>

<script setup>
import EnergyDifferenceChart from "~/components/EnergyDifferenceChart.vue";
</script>


-->

<template>
  <div class="chart-container">
    <client-only>
      <v-chart class="chart" :option="chartOptions" autoresize />
    </client-only>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import VChart from "vue-echarts";
import { use } from "echarts/core";
import { BarChart } from "echarts/charts";
import {
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  GridComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

use([
  BarChart,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  GridComponent,
  CanvasRenderer,
]);

const props = defineProps({
  labels: {
    type: Array,
    default: () => [
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
      "Domingo",
    ],
  },
  energyConsumed: {
    type: Array,
    default: () => [30, 50, 20, 60, 40, 70, 35],
  },
  energyProduced: {
    type: Array,
    default: () => [40, 30, 25, 50, 45, 60, 38],
  },
});

const getCssVariable = (variable) =>
  getComputedStyle(document.documentElement).getPropertyValue(variable).trim();

const chartOptions = computed(() => ({
  title: { text: "Diferencia entre energía consumida y producción" },
  tooltip: { trigger: "axis" },
  legend: { data: ["Consumo", "Producción"] },
  xAxis: { type: "category", data: props.labels },
  yAxis: { type: "value" },
  series: [
    {
      name: "Energía Consumida",
      type: "bar",
      data: props.energyConsumed,
      color: getCssVariable("--expenses-color"),
    },
    {
      name: "Energía Producida",
      type: "bar",
      data: props.energyProduced,
      color: getCssVariable("--income-color"),
    },
  ],
}));
</script>

<style scoped>
.chart-container {
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
}

.chart {
  width: 100%;
  height: 300px;
}
</style>
