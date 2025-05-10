<template>
  <div class="grid-status-container">
    <h2>Estado de la Red</h2>
    <div class="status">
      <div class="box">
        <span class="label">Generación:</span>
        <span class="value">{{ generation }} MW</span>
      </div>
      <div class="box">
        <span class="label">Consumo:</span>
        <span class="value">{{ consumption }} MW</span>
      </div>
      <div class="box" :class="statusClass">
        <span class="label">Estabilidad:</span>
        <span class="value">{{ stability }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  generation: { type: Number, default: 120 },
  consumption: { type: Number, default: 110 },
  stability: { type: String, default: "Estable" },
});

const statusClass = computed(() => {
  return props.stability === "Inestable" ? "unstable" : "stable";
});
</script>

<style scoped>
.grid-status-container {
  text-align: center;
  max-width: 500px;
  margin: 20px auto;
}
.status {
  display: flex;
  justify-content: space-around;
}
.box {
  padding: 15px;
  background: #f3f3f3;
  border-radius: 5px;
}
.stable {
  background: #8bc34a;
}
.unstable {
  background: #f44336;
}
</style>
