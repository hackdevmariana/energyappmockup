<template>
  <div class="input-container">
    <input
      :placeholder="placeholder"
      :id="inputId"
      class="input-field"
      type="text"
      v-model="inputValue"
    />
    <label :for="inputId" class="input-label">{{ label }}</label>
    <span class="input-highlight"></span>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  label: { type: String, required: true },
  placeholder: { type: String, required: true },
  inputId: { type: String, default: "input-field" },
});

const inputValue = ref("");
</script>

<style scoped>
.input-container {
  position: relative;
  margin: 20px;
}

.input-field {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #ccc;
  outline: none;
  background-color: transparent;
}

.input-label {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 16px;
  color: rgba(204, 204, 204, 0);
  pointer-events: none;
  transition: all 0.3s ease;
}

.input-highlight {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background-color: var(--primary-color);
  transition: all 0.3s ease;
}

.input-field:focus + .input-label {
  top: -20px;
  font-size: 12px;
  color: var(--primary-color);
}

.input-field:focus + .input-label + .input-highlight {
  width: 100%;
}
</style>
