<template>
  <div class="contenedor">
    <p v-if="differential === null" class="no-data">
      Los datos aún no están disponibles. Intenta más tarde.
    </p>

    <div v-else>
      <div class="info">
        <span class="value">{{ differential.toFixed(2) }} €/MWh</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import dayjs from "dayjs";
import "dayjs/locale/es";

dayjs.locale("es");

const differential = ref(null);

const fetchDifferential = async () => {
  try {
    const today = dayjs().format("YYYY-MM-DD");

    const response = await fetch(
      `https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date=${today}T00:00&end_date=${today}T23:59&time_trunc=hour`
    );
    const data = await response.json();

    if (data.included?.[0]?.attributes?.values?.length > 0) {
      const parsedPrices = data.included[0].attributes.values.map((item) => item.value);

      const highestPrice = Math.max(...parsedPrices);
      const lowestPrice = Math.min(...parsedPrices);

      differential.value = highestPrice - lowestPrice;
    } else {
      console.warn("No se encontraron datos para hoy.");
    }
  } catch (error) {
    console.error("Error al obtener el diferencial de precios:", error);
  }
};

onMounted(fetchDifferential);
</script>

<style scoped>
.contenedor {
  width: 90%;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
  border: 2px solid var(--text-color);
  border-radius: 10px;
  background-color: var(--background-color); 
}

.no-data {
  font-weight: bold;
  color: var(--text-color);
}

.info {
  display: flex;
  justify-content: center;
  gap: 10px;
  font-size: 1.5rem;
  font-weight: bold;
}

.value {
  font-family: var(--font-featured);
}
</style>
