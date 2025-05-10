<!--
USAGE:

<SelfConsumptionChart
      :data="[
        { name: 'Autoconsumo', value: 70 },
        { name: 'Excedente vertido', value: 30 }
      ]"
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
import { PieChart } from "echarts/charts";
import { TooltipComponent, TitleComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

use([PieChart, TooltipComponent, TitleComponent, CanvasRenderer]);

const props = defineProps({
  data: {
    type: Array,
    default: () => [
      { name: "Autoconsumo", value: 70 },
      { name: "Excedente vertido", value: 30 },
    ],
  },
});

const chartOptions = computed(() => ({
  title: { text: "Distribución de Autoconsumo" },
  tooltip: { trigger: "item" },
  series: [{ name: "Energía", type: "pie", radius: "50%", data: props.data }],
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
