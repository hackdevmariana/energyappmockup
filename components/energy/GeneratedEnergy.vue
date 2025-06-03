<template>
  <div class="energy-box">
    <i class="bi bi-sun"></i> 
    <div class="energy-text">
      <p class="label">Energía generada</p>
      <p class="value">{{ energy }} kWh</p>
    </div>
  </div>
</template>

<script setup>
defineProps({ energy: Number }); 
</script>

<style scoped>
.energy-box {
  background-color: var(--secondary-color);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}
.label {
  font-family: var(--font-general);
}
.value {
  font-family: var(--font-featured);
  font-size: 1.5rem;
}
</style>
