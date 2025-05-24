<template>
  <div class="contenedor">
    <h2>Precios de la luz por fecha</h2>

    <!-- Selector de fecha -->
    <vue3-datepicker v-model="selectedDate" :clearable="false" @update:modelValue="fetchPrices" />

    <p v-if="prices.length === 0" class="no-data">
      No hay datos disponibles para esta fecha. Prueba con otro día.
    </p>

    <div v-else>
      <div class="list">
        <div
          v-for="(hour, index) in prices"
          :key="index"
          :class="getBackgroundColor(hour.value)"
          class="hour-box"
        >
          <span class="hour">{{ hour.hour }}:00</span>
          <span class="mwh">{{ hour.value.toFixed(2) }} €/MWh</span>
          <span class="kwh">{{ (hour.value / 1000).toFixed(5) }} €/kWh</span>
        </div>
      </div>

      <!-- Gráfica de precios por horas -->
      <div class="chart-container">
        <v-chart class="chart" :option="chartOptions" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import Vue3Datepicker from 'vue3-datepicker';
import { use } from "echarts/core";
import VChart from "vue-echarts";
import { LineChart } from "echarts/charts";
import { GridComponent, TooltipComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

use([LineChart, GridComponent, TooltipComponent, CanvasRenderer]);

const selectedDate = ref(new Date());
const prices = ref([]);
const averagePrice = ref(0);

const fetchPrices = async () => {
  try {
    const formattedDate = selectedDate.value.toISOString().split("T")[0];

    const response = await fetch(
      `https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date=${formattedDate}T00:00&end_date=${formattedDate}T23:59&time_trunc=hour`
    );
    const data = await response.json();

    if (data.included && data.included[0].attributes.values.length > 0) {
      const parsedPrices = data.included[0].attributes.values.map((item) => ({
        hour: new Date(item.datetime).getHours(),
        value: item.value,
      }));

      prices.value = parsedPrices;
      averagePrice.value = parsedPrices.reduce((sum, item) => sum + item.value, 0) / parsedPrices.length;
    } else {
      prices.value = [];
    }
  } catch (error) {
    console.error("Error al obtener los precios:", error);
    prices.value = [];
  }
};

const getBackgroundColor = (price) => {
  if (price < averagePrice.value * 0.9) return "income"; // Precio más barato
  if (price > averagePrice.value * 1.1) return "expenses"; // Precio más caro
  return "secondary"; // Precio intermedio
};

const chartOptions = computed(() => ({
  tooltip: {
    trigger: "axis",
  },
  xAxis: {
    type: "category",
    data: prices.value.map((p) => `${p.hour}:00`),
  },
  yAxis: {
    type: "value",
    name: "€/MWh",
  },
  series: [
    {
      data: prices.value.map((p) => p.value),
      type: "line",
      smooth: true,
      color: "#149CEA",
    },
  ],
}));

onMounted(fetchPrices);
</script>

<style scoped>
.contenedor {
  width: 90%;
  margin: 0 auto;
  text-align: center;
}

.no-data {
  font-weight: bold;
  color: var(--text-color);
  padding: 15px;
  background-color: var(--background-color);
  border-radius: 8px;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.hour-box {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
}

.chart-container {
  width: 90%;
  margin: 20px auto;
}

.chart {
  width: 100%;
  height: 400px;
}

.income {
  background-color: var(--income-color);
}

.expenses {
  background-color: var(--expenses-color);
}

.secondary {
  background-color: var(--secondary-color);
}
</style>
