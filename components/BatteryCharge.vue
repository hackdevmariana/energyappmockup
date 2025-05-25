<template>
  <div class="contenedor">
    <h2>Nivel de carga energética</h2>

    <!-- Barra de carga -->
    <div class="battery-container">
      <div ref="batteryBar" class="battery-bar"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import gsap from "gsap";

const props = defineProps({
  chargeLevel: {
    type: Number,
    default: 50, // Nivel de carga inicial
  },
});

const batteryBar = ref(null);

// Función para actualizar la animación según la carga
const updateCharge = () => {
  gsap.to(batteryBar.value, {
    width: `${props.chargeLevel}%`,
    duration: 1.5,
    ease: "power3.out",
    backgroundColor: props.chargeLevel > 70 ? "green" : props.chargeLevel > 40 ? "yellow" : "red",
  });
};

// Observa cambios en `chargeLevel`
watch(() => props.chargeLevel, updateCharge);

onMounted(updateCharge);
</script>

<style scoped>
.contenedor {
  width: 90%;
  margin: 0 auto;
  text-align: center;
}

.battery-container {
  width: 80%;
  height: 30px;
  border: 3px solid var(--text-color);
  border-radius: 10px;
  overflow: hidden;
  margin: 20px auto;
  position: relative;
}

.battery-bar {
  width: 50%;
  height: 100%;
  background-color: yellow;
  transition: width 1.5s ease-in-out, background-color 0.5s ease;
}
</style>
