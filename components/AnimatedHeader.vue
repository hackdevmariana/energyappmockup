<template>
  <div class="header-container">
    <span ref="headerText" class="header-text">
      {{ title }}
    </span>
    <span class="underline"></span>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

defineProps({
  title: {
    type: String,
    default: "Bienvenido a EnergyAPP",
  },
});

const headerText = ref(null);

onMounted(() => {
  gsap.fromTo(
    headerText.value,
    { x: -50, opacity: 0 },
    { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
  );

  gsap.fromTo(
    ".underline",
    { width: "0%" },
    { width: "100%", duration: 1.2, delay: 0.3, ease: "power3.out" }
  );
});
</script>

<style scoped>
.header-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  padding: 10px 0;
  position: relative;
}

.header-text {
  font-family: var(--font-featured);
  font-size: 2.5rem;
  color: var(--primary-color);
}

.underline {
  width: 100%;
  height: 4px;
  background-color: var(--primary-color);
  position: absolute;
  bottom: -5px;
}
</style>
