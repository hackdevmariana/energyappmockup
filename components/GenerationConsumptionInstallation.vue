<script setup>
import dayjs from "dayjs";
import "dayjs/locale/es"; 
import { defineProps } from "vue";

const props = defineProps(["logo", "installationName", "date", "production"]);

dayjs.locale("es"); 
const formattedDate = dayjs(props.date).format("dddd, D [de] MMMM YYYY"); </script>

<template>
  <div class="energy-item">
    <img :src="props.logo" alt="Logo instalación" class="energy-logo" />
    <div class="energy-info">
      <div class="energy-name">{{ props.installationName }}</div>
      <div class="energy-date">{{ formattedDate }}</div>
    </div>
    <div class="energy-production">{{ props.production }}</div>
  </div>
</template>

<style scoped>
.energy-item {
  display: flex;
  align-items: center;
  background-color: var(--background-color);
  color: var(--text-color);
  border-radius: 10px;
  border: 1px solid var(--text-color); 
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
  width: 90%;
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
  text-align: left;
}

.energy-date {
  font-size: 0.9em;
  text-align: left;

}

.energy-production {
  font-family: var(--font-featured);
  font-size: 1.2em;
}
</style>
