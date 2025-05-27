<script setup>
import { ref, onMounted } from "vue";
import dayjs from "dayjs";
import "dayjs/locale/es";

dayjs.locale("es");

const time = ref(dayjs().format("HH:mm")); 
const date = ref(dayjs().format("ddd D MMM YYYY")); 

onMounted(() => {
  setInterval(() => {
    time.value = dayjs().format("HH:mm");
  }, 1000);
});
</script>

<template>
  <div class="clock-container">
    <div class="clock-time">{{ time }}</div>
    <div class="clock-date">{{ date }}</div>
  </div>
</template>

<style scoped>
.clock-container {
  text-align: center;
  padding: 5px;
}

.clock-time {
  font-family: var(--font-featured);
  font-size: 2em; 
  font-weight: bold;
}

.clock-date {
  font-family: var(--font-general);
  font-size: 0.7em; 
  color: var(--text-color);
}
</style>
