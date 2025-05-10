<!--
USAGE:

<UserComparisonChart
      :users="['Tú', 'Usuario A', 'Usuario B', 'Usuario C']"
      :consumption="[150, 200, 180, 220]"
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
import { BarChart } from "echarts/charts";
import {
  TooltipComponent,
  TitleComponent,
  GridComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

use([
  BarChart,
  TooltipComponent,
  TitleComponent,
  GridComponent,
  CanvasRenderer,
]);

const props = defineProps({
  users: {
    type: Array,
    default: () => ["Tú", "Usuario A", "Usuario B", "Usuario C"],
  },
  consumption: { type: Array, default: () => [150, 200, 180, 220] },
});

const chartOptions = computed(() => ({
  title: { text: "Comparación de Consumo Energético" },
  tooltip: { trigger: "axis" },
  xAxis: { type: "category", data: props.users },
  yAxis: { type: "value", name: "kWh/mes" },
  series: [{ name: "Consumo", type: "bar", data: props.consumption }],
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
