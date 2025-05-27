<script setup>
import dayjs from "dayjs";
import "dayjs/locale/es"; 
import { defineProps } from "vue";

const props = defineProps(["logo", "installationName", "date", "production"]);

dayjs.locale("es"); 
const formattedDate = dayjs(props.date).format("dddd, D [de] MMMM YYYY"); // 📌 Ejemplo: "martes, 27 de mayo de 2025"
</script>

<template>
  <div class="energy-item">
    <img :src="props.logo" alt="Logo instalación" class="energy-logo" />
    <div class="energy-info">
      <div class="energy-name">{{ props.installationName }}</div>
      <div class="energy-date">{{ formattedDate }}</div>
    </div>
    <div class="energy-production">{{ props.production }} kWh</div>
  </div>
</template>

<style scoped>
.energy-item {
  display: flex;
  align-items: center;
  background-color: var(--background-color);
  color: var(--text-color);
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
}

.energy-logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
}

.energy-info {
  font-family: var(--font-general);
  flex-grow: 1;
}

.energy-name {
  font-weight: bold;
}

.energy-date {
  font-size: 0.9em;
}

.energy-production {
  font-family: var(--font-featured);
  font-size: 1.2em;
}
</style>
