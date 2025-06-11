<template>
  <div class="optimizer-container">
    <h2>Simulador de optimización energética</h2>

    <p>Capacidad total: {{ capacity }} kWh</p>
    <p>Potencia disponible: {{ power }} kW</p>

    <div class="chart-container">
      <client-only>
        <v-chart class="chart" :option="chartOptions" />
      </client-only>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import VChart from "vue-echarts";
import { use } from "echarts/core";
import { LineChart } from "echarts/charts";
import { GridComponent, TooltipComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import dayjs from "dayjs";
import "dayjs/locale/es";

use([LineChart, GridComponent, TooltipComponent, CanvasRenderer]);

// Parámetros del simulador
const props = defineProps({
  capacity: Number, // Ejemplo: 500 kWh
  power: Number, // Ejemplo: 100 kW
});

const prices = ref([]);
const averagePrice = ref(0);

const fetchPrices = async () => {
  try {
    const today = dayjs().format("YYYY-MM-DD");

    const response = await fetch(
      `https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date=${today}T00:00&end_date=${today}T23:59&time_trunc=hour`
    );
    const data = await response.json();

    if (data.included && data.included[0].attributes.values.length > 0) {
      const parsedPrices = data.included[0].attributes.values.map((item) => ({
        hour: new Date(item.datetime).getHours(),
        value: item.value,
      }));

      prices.value = parsedPrices;
      averagePrice.value = parsedPrices.reduce((sum, item) => sum + item.value, 0) / parsedPrices.length;
    }
  } catch (error) {
    console.error("Error al obtener los precios:", error);
  }
};

onMounted(fetchPrices);

const optimizedPlan = computed(() => {
  let battery = 0;
  return prices.value.map((hourData) => {
    let action = "Mantener"; // Default

    if (hourData.value < averagePrice.value) {
      battery = Math.min(battery + props.power, props.capacity);
      action = "Cargar";
    } else if (hourData.value > averagePrice.value * 1.1 && battery > 0) {
      battery = Math.max(battery - props.power, 0);
      action = "Vender";
    }

    return { hour: hourData.hour, action, battery };
  });
});

// Gráfico con los datos optimizados
const chartOptions = computed(() => ({
  tooltip: { trigger: "axis" },
  xAxis: { type: "category", data: optimizedPlan.value.map((p) => `${p.hour}:00`) },
  yAxis: { type: "value", name: "Nivel batería (kWh)", min: 0, max: props.capacity },
  series: [
    {
      data: optimizedPlan.value.map((p) => p.battery),
      type: "line",
      smooth: true,
      color: "#149CEA"
    }
  ]
}));
</script>

<style scoped>
.optimizer-container {
  width: 90%;
  margin: 0 auto;
  text-align: center;
}

.chart-container {
  width: 90%;
  margin: 20px auto;
}

.chart {
  width: 100%;
  height: 400px;
}
</style>
