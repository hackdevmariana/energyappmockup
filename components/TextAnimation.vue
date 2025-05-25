<template>
  <div class="contenedor">
    <span ref="animatedText" class="animated-text">
      <span v-for="(letter, index) in textArray" :key="index" class="letter">
        {{ letter }}
      </span>
    </span>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const props = defineProps({
  text: {
    type: String,
    default: "EnergyAPP",
  },
});

const textArray = ref([...props.text]);

onMounted(() => {
  gsap.fromTo(".letter", 
    { opacity: 0, x: 50 }, 
    { opacity: 1, x: 0, duration: 1, stagger: 0.1, ease: "power3.out" }
  );
});
</script>

<style scoped>
.contenedor {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color);
}

.animated-text {
  font-family: var(--font-featured);
  font-size: 3rem;
  color: var(--primary-color);
  display: flex;
}

.letter {
  display: inline-block;
}
</style>
