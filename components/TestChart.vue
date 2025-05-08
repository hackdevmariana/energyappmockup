<template>
  <div class="test-chart-container">
    <client-only>
      <v-chart
        class="test-chart"
        :option="chartOptions"
        :key="chartOptions"
        autoresize
      />
    </client-only>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import VChart from "vue-echarts";
import { use } from "echarts/core";

// 🔹 Componentes que faltan
import { LineChart } from "echarts/charts";
import {
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  GridComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

// 🔹 Ahora registramos todos los componentes necesarios
use([
  LineChart,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  GridComponent,
  CanvasRenderer,
]);

const chartOptions = ref({});

onMounted(() => {
  setTimeout(() => {
    chartOptions.value = {
      title: { text: "Prueba de Vue-ECharts" },
      tooltip: { trigger: "axis" },
      xAxis: { type: "category", data: ["A", "B", "C", "D", "E"] },
      yAxis: { type: "value" },
      series: [
        {
          name: "Valores de prueba",
          type: "line",
          data: [10, 20, 130, 40, 50],
          smooth: true,
        },
      ],
    };
    console.log("chartOptions actualizado:", chartOptions.value);
  }, 500);
});
</script>

<style scoped>
.test-chart-container {
  width: 100%;
  max-width: 400px;
  margin: 20px auto;
  border: 2px solid blue; /* Debug visual */
}

.test-chart {
  width: 100%;
  height: 250px;
}
</style>
