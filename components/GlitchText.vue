<template>
  <div class="glitch-container">
    {{ text }}
    <span>{{ text }}</span>
    <span>{{ text }}</span>
  </div>
</template>

<script setup>
defineProps({
  text: { type: String, required: true },
});
</script>

<style scoped>
.glitch-container {
  position: relative;
  font-family: "Orbitron", sans-serif;
  font-size: 50px;
  font-weight: 900;
  text-transform: uppercase;
  color: var(--primary-color);
  text-shadow: 0.05em 0 0 var(--primary-color),
    -0.03em -0.04em 0 var(--secondary-color),
    0.025em 0.04em 0 var(--primary-color);
  animation: glitch 725ms infinite;
}

.glitch-container span {
  position: absolute;
  top: 0;
  left: 0;
}

.glitch-container span:first-child {
  animation: glitch 500ms infinite;
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
  transform: translate(-0.04em, -0.03em);
  opacity: 0.75;
}

.glitch-container span:last-child {
  animation: glitch 375ms infinite;
  clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
  transform: translate(0.04em, 0.03em);
  opacity: 0.75;
}

@keyframes glitch {
  0% {
    text-shadow: 0.05em 0 0 var(--income-color),
      -0.03em -0.04em 0 var(--secondary-color),
      0.025em 0.04em 0 var(--primary-color);
  }
  15% {
    text-shadow: 0.05em 0 0 var(--income-color),
      -0.03em -0.04em 0 var(--secondary-color),
      0.025em 0.04em 0 var(--primary-color);
  }
  16% {
    text-shadow: -0.05em -0.025em 0 var(--income-color),
      0.025em 0.035em 0 var(--secondary-color),
      -0.05em -0.05em 0 var(--primary-color);
  }
  49% {
    text-shadow: -0.05em -0.025em 0 var(--income-color),
      0.025em 0.035em 0 var(--secondary-color),
      -0.05em -0.05em 0 var(--primary-color);
  }
  50% {
    text-shadow: 0.05em 0.035em 0 var(--income-color),
      0.03em 0 0 var(--secondary-color), 0 -0.04em 0 var(--primary-color);
  }
  99% {
    text-shadow: 0.05em 0.035em 0 var(--income-color),
      0.03em 0 0 var(--secondary-color), 0 -0.04em 0 var(--primary-color);
  }
  100% {
    text-shadow: -0.05em 0 0 var(--income-color),
      -0.025em -0.04em 0 var(--secondary-color),
      -0.04em -0.025em 0 var(--primary-color);
  }
}
</style>
