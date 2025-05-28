<template>
  <div class="contenedor">
    <p v-if="!highestPrice" class="no-data">
      Los datos aún no están disponibles. Intenta más tarde.
    </p>

    <div v-else>
      <div class="info">
        <span class="hour">{{ highestPrice.hour }}:00</span>
      </div>
      <div class="info">
        <span class="price">{{ highestPrice.value.toFixed(2) }} €/MWh</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import dayjs from "dayjs";
import "dayjs/locale/es";

dayjs.locale("es");

const highestPrice = ref(null);

const fetchHighestPrice = async () => {
  try {
    const today = dayjs().format("YYYY-MM-DD");

    const response = await fetch(
      `https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date=${today}T00:00&end_date=${today}T23:59&time_trunc=hour`
    );
    const data = await response.json();

    if (data.included?.[0]?.attributes?.values?.length > 0) {
      const parsedPrices = data.included[0].attributes.values.map((item) => ({
        hour: new Date(item.datetime).getHours(),
        value: item.value,
      }));

      highestPrice.value = parsedPrices.reduce((max, item) => (item.value > max.value ? item : max), parsedPrices[0]);
    } else {
      console.warn("No se encontraron datos para hoy.");
    }
  } catch (error) {
    console.error("Error al obtener el precio más alto:", error);
  }
};

onMounted(fetchHighestPrice);
</script>

<style scoped>
.contenedor {
  width: 90%;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
  border: 2px solid var(--text-color);
  border-radius: 10px;
  background-color: var(--expenses-color); 
}

.no-data {
  font-weight: bold;
  color: var(--text-color);
}

.info {
  display: flex;
  justify-content: center;
  gap: 10px;
  font-size: 1.2rem;
  font-weight: bold;
}

.hour {
  font-family: var(--font-featured);
  font-size: 2rem;
}

.price {
  font-family: var(--font-general);
}
</style>
