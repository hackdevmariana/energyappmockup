<!--
<EnergyConsumptionChart
      :labels="['00:00', '06:00', '12:00', '18:00', '24:00']"
      :consumption="[0.4, 0.8, 1.2, 1.1, 0.5]"
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
  GridComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

use([
  LineChart,
  TooltipComponent,
  TitleComponent,
  GridComponent,
  CanvasRenderer,
]);

const props = defineProps({
  labels: {
    type: Array,
    default: () => ["00:00", "06:00", "12:00", "18:00", "24:00"],
  },
  consumption: { type: Array, default: () => [0.4, 0.8, 1.2, 1.1, 0.5] },
});

const chartOptions = computed(() => ({
  title: { text: "Consumo Energético Diario" },
  tooltip: { trigger: "axis" },
  xAxis: { type: "category", data: props.labels },
  yAxis: { type: "value", name: "kWh" },
  series: [
    { name: "Consumo", type: "line", data: props.consumption, smooth: true },
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
