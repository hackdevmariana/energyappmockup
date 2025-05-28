<template>
  <div class="contenedor">
    <div class="top-line">{{ topLine }}</div>
    <div class="quantity">{{ price ? price : 'Cargando...' }}</div>
    <div class="bottom-line">{{ bottomLine }}</div>
    
    <!-- Luz animada en el borde superior -->
    <div class="animated-border-light"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import dayjs from "dayjs";
import "dayjs/locale/es";

dayjs.locale("es");

const price = ref(null);

const now = dayjs().startOf("hour").format("YYYY-MM-DDTHH:00"); // 🔹 Inicio de la hora actual
const nextHour = dayjs().add(1, "hour").startOf("hour").format("YYYY-MM-DDTHH:00"); // 🔹 Inicio de la siguiente hora

const nowStart = dayjs().startOf("hour").format("YYYY-MM-DDTHH:00"); // 🔥 Inicio de la hora actual
const nowEnd = dayjs().endOf("hour").format("YYYY-MM-DDTHH:59"); // 🔥 Final de la hora actual

const fetchPrice = async () => {
  try {
    const response = await fetch(
      `https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date=${nowStart}&end_date=${nowEnd}&time_trunc=hour`
    );

    const data = await response.json();
    console.log("Datos de la API:", data); // 🔥 Verificar la respuesta

    if (data.included?.[0]?.attributes?.values?.length > 0) {
      price.value = data.included[0].attributes.values.slice(-1)[0].value; // 📌 Último precio disponible dentro del rango
    } else {
      console.warn("No se encontraron datos para esta hora.");
      price.value = "No disponible";
    }
  } catch (error) {
    console.error("Error al obtener el precio de la luz:", error);
    price.value = "Error";
  }
};

onMounted(fetchPrice);


</script>


<style scoped>
.contenedor {
  width: 90%;
  position: relative;
  padding: 20px;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  border: 2px solid rgba(var(--text-color-rgb), 0.8);
  background-color: v-bind(backgroundColor);
}

.top-line {
  position: absolute;
  top: 10px;
  left: 15px;
  font-family: var(--font-general);
}

.quantity {
  font-family: var(--font-featured);
  font-size: 2rem;
}

.bottom-line {
  position: absolute;
  bottom: 10px;
  right: 15px;
  font-family: var(--font-general);
}

/* Animación de luz solo en el borde superior */
.animated-border-light {
  position: absolute;
  top: 0;
  left: -30%;
  width: 30%;
  height: 3px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--secondary-color) 50%,
    transparent 100%
  );
  animation: move-light 8s infinite ease-in-out;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  pointer-events: none;
}

@keyframes move-light {
  0% {
    left: -30%;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  50% {
    left: 100%;
    opacity: 1;
  }
  100% {
    left: 100%;
    opacity: 0;
  }
}
</style>
