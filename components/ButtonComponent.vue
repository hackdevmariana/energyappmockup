<template>
  <a :href="url" target="_blank">
    <button>
      {{ text }}
    </button>
  </a>
</template>

<script setup>
defineProps({
  text: String,
  url: String
});
</script>

<style scoped>
button {
  width: 10em;
  position: relative;
  height: 3.5em;
  border: 3px ridge var(--secondary-color);
  outline: none;
  background-color: transparent;
  color: var(--text-color);
  transition: 1s;
  border-radius: 0.3em;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

button::after {
  content: "";
  position: absolute;
  top: -10px;
  left: 3%;
  width: 95%;
  height: 40%;
  background-color: var(--background-color);
  transition: 0.5s;
  transform-origin: center;
}

button::before {
  content: "";
  transform-origin: center;
  position: absolute;
  top: 80%;
  left: 3%;
  width: 95%;
  height: 40%;
  background-color: var(--background-color);
  transition: 0.5s;
}

button:hover::before,
button:hover::after {
  transform: scale(0);
}

button:hover {
  box-shadow: inset 0px 0px 25px var(--secondary-color);
}
</style>
