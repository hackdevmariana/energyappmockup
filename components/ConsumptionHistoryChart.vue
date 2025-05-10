<!--
USAGE:

<ConsumptionHistoryChart
      :labels="['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']"
      :consumption="[120, 135, 110, 145, 160, 155]"
    />
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
  TitleComponent,
  LegendComponent,
  GridComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

use([
  LineChart,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
  GridComponent,
  CanvasRenderer,
]);

const props = defineProps({
  labels: {
    type: Array,
    default: () => ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
  },
  consumption: { type: Array, default: () => [120, 135, 110, 145, 160, 155] },
});

const chartOptions = computed(() => ({
  title: { text: "Histórico de Consumo Energético" },
  tooltip: { trigger: "axis" },
  legend: { data: ["Consumo en kWh"] },
  xAxis: { type: "category", data: props.labels },
  yAxis: { type: "value", name: "kWh" },
  series: [
    {
      name: "Consumo en kWh",
      type: "line",
      data: props.consumption,
      smooth: true,
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
