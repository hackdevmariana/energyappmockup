<template>
  <div class="contenedor">
    <h2>Precios de la luz por hora</h2>
    <p class="avg-price">Precio medio: {{ averagePrice.toFixed(2) }} €/MWh</p>

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
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const prices = ref([]);
const averagePrice = ref(0);

const fetchPrices = async () => {
  try {
    const response = await fetch(
      "https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date=2025-05-24T00:00&end_date=2025-05-24T23:59&time_trunc=hour"
    );
    const data = await response.json();
    
    const parsedPrices = data.included[0].attributes.values.map((item) => ({
      hour: new Date(item.datetime).getHours(),
      value: item.value,
    }));

    prices.value = parsedPrices;

    // Calcular precio medio
    averagePrice.value = parsedPrices.reduce((sum, item) => sum + item.value, 0) / parsedPrices.length;
  } catch (error) {
    console.error("Error al obtener los precios:", error);
  }
};

const getBackgroundColor = (price) => {
  if (price < averagePrice.value * 0.9) return "income"; // Precio más barato
  if (price > averagePrice.value * 1.1) return "expenses"; // Precio más caro
  return "secondary"; // Precio intermedio
};

onMounted(fetchPrices);
</script>

<style scoped>
.contenedor {
  width: 90%;
  margin: 0 auto;
  text-align: center;
}

.avg-price {
  font-weight: bold;
  margin-bottom: 10px;
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

.hour {
  flex: 1;
  text-align: left;
}

.mwh {
  flex: 1;
  text-align: center;
}

.kwh {
  flex: 1;
  text-align: right;
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
