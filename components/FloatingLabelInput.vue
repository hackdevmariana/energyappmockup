<!--
USAGE:

    <FloatingLabelInput labelText="Name" />
    <FloatingLabelInput labelText="Email" />
    <FloatingLabelInput labelText="Phone" />

-->

<template>
  <div class="inputBox">
    <input required="" type="text" v-model="inputValue" />
    <span>{{ labelText }}</span>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  labelText: { type: String, required: true }, // Texto del label (First Name, Email, etc.)
});

const inputValue = ref(""); // Permitir interacción con el input
</script>

<style scoped>
.inputBox {
  position: relative;
}

.inputBox input {
  padding: 15px 20px;
  outline: none;
  background: transparent;
  border-radius: 5px;
  color: var(--text-color);
  border: 1px solid var(--primary-color);
  font-size: 1em;
}

.inputBox span {
  position: absolute;
  left: 0;
  padding: 15px 20px;
  pointer-events: none;
  font-size: 1em;
  transition: 0.4s cubic-bezier(0.05, 0.81, 0, 0.93);
  color: var(--primary-color);
  letter-spacing: 0.1em;
}

.inputBox input:focus ~ span,
.inputBox input:valid ~ span {
  font-size: 0.7em;
  transform: translateX(14px) translateY(-7.5px);
  padding: 0 5px;
  border-radius: 2px;
  background: var(--background-color);
  letter-spacing: 0em;
  border: 1px solid var(--primary-color);
}
</style>
