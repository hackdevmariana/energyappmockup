<!--

USAGE:

<template>
  <div>
    <h1>Ahorro Energético con Instalación</h1>
    <EnergySavingsChart
      :labels="['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']"
      :marketPrice="[0.15, 0.18, 0.20, 0.17, 0.16, 0.19, 0.21]"
      :userPrice="[0.08, 0.09, 0.10, 0.07, 0.09, 0.08, 0.10]"
    />
  </div>
</template>

<script setup>
import EnergySavingsChart from "~/components/EnergySavingsChart.vue";
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
import { computed } from "vue";
import VChart from "vue-echarts";
import { use } from "echarts/core";
import { LineChart } from "echarts/charts";
import {
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  GridComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

use([
  LineChart,
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
  marketPrice: {
    type: Array,
    default: () => [0.15, 0.18, 0.2, 0.17, 0.16, 0.19, 0.21],
  },
  userPrice: {
    type: Array,
    default: () => [0.08, 0.09, 0.1, 0.07, 0.09, 0.08, 0.1],
  },
});

// Obtener los valores de las variables CSS para los colores
const getCssVariable = (variable) =>
  getComputedStyle(document.documentElement).getPropertyValue(variable).trim();

const chartOptions = computed(() => ({
  title: { text: "Evolución del ahorro energético" },
  tooltip: { trigger: "axis" },
  legend: { data: ["Precio de mercado", "Coste usuario"] },
  xAxis: { type: "category", data: props.labels },
  yAxis: { type: "value", name: "€/kWh" },
  series: [
    {
      name: "Precio de mercado",
      type: "line",
      data: props.marketPrice,
      smooth: true,
      color: getCssVariable("--expenses-color"),
    },
    {
      name: "Precio usuario",
      type: "line",
      data: props.userPrice,
      smooth: true,
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
