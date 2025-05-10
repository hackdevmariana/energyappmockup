<!--
<RenewableEnergyMix
      :data="[
        { name: 'Solar', value: 45 },
        { name: 'Eólica', value: 30 },
        { name: 'Hidráulica', value: 15 },
        { name: 'Biomasa', value: 10 }
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
      { name: "Solar", value: 45 },
      { name: "Eólica", value: 30 },
      { name: "Hidráulica", value: 15 },
      { name: "Biomasa", value: 10 },
    ],
  },
});

const chartOptions = computed(() => ({
  title: { text: "Mix Energético de la Red" },
  tooltip: { trigger: "item" },
  series: [{ type: "pie", radius: "50%", data: props.data }],
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
