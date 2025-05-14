<template>
  <div>
    <input type="checkbox" :id="checkboxId" v-model="checked" />
    <label :for="checkboxId" class="switch" :class="{ active: checked }">
      {{ checked ? labelTwo : label }}
      <svg
        class="slider"
        viewBox="0 0 512 512"
        height="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"
        ></path>
      </svg>
    </label>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  label: { type: String, required: true }, // Texto cuando está apagado
  labelTwo: { type: String, required: true }, // Texto cuando está encendido
  checkboxId: { type: String, default: "checkbox" }, // ID del checkbox
});

const checked = ref(false); // Estado del checkbox
</script>

<style scoped>
#checkbox {
  display: none;
}

.switch {
  position: relative;
  width: fit-content;
  padding: 10px 20px;
  background-color: rgb(46, 46, 46);
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: white;
  font-size: 0.9em;
  font-weight: 600;
  transition: all 0.3s;
}
.switch svg path {
  fill: white;
}
#checkbox:checked + .switch {
  background-color: var(--income-color);
  box-shadow: 0px 0px 40px var(--secondary-color);
}

.switch.active {
  background-color: var(--income-color);
  box-shadow: 0px 0px 40px var(--secondary-color);
}

input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
</style>
