<!-- USAGE:

<AnimatedContainer
  topLine="Saldo"
  quantity="1000"
  bottomLine="euros"
/>


-->

<template>
  <div class="contenedor">
    <div class="top-line">{{ topLine }}</div>
    <div class="quantity">{{ quantity }}</div>
    <div class="bottom-line">{{ bottomLine }}</div>
    
    <!-- Luz animada en el borde superior -->
    <div class="animated-border-light"></div>
  </div>
</template>

<script setup>
defineProps({
  topLine: {
    type: String,
    default: ""
  },
  quantity: {
    type: String,
    default: ""
  },
  bottomLine: {
    type: String,
    default: ""
  }
});
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
