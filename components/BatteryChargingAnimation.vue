<template>
  <div class="contenedor">
    <h2>Nivel de carga energética</h2>

    <!-- Barra de carga -->
    <div class="battery-container">
      <div ref="batteryBar" class="battery-bar"></div>
    </div>

    <!-- Control para cambiar el nivel de carga -->
    <input v-model="chargeLevel" type="range" min="0" max="100" @input="updateCharge" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";

const chargeLevel = ref(50);
const batteryBar = ref(null);

const updateCharge = () => {
  gsap.to(batteryBar.value, {
    width: `${chargeLevel.value}%`,
    duration: 1.5,
    ease: "power3.out",
    backgroundColor: chargeLevel.value > 70 ? "green" : chargeLevel.value > 40 ? "yellow" : "red",
  });
};

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

input {
  width: 80%;
  margin-top: 15px;
}
</style>
