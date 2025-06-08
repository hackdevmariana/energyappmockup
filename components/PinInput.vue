<template>
  <div class="pin-container">
    <p class="pin-title">Escribe tu PIN</p>

    <div class="pin-dots">
      <span
        v-for="index in pinLength"
        :key="index"
        class="pin-dot"
        :class="{ filled: index <= pin.length }"
      ></span>
    </div>

    <div class="num-pad">
      <button
        v-for="num in numbers"
        :key="num"
        @click="addDigit(num)"
      >
        {{ num }}
      </button>

      <div></div> <!-- espacio vacío -->
      <button @click="addDigit(0)">0</button>
      <i class="fa-solid fa-delete-left delete-icon" @click="clearPin"></i>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, watch } from 'vue';

const props = defineProps({
  pinLength: {
    type: Number,
    required: true,
    validator: (value) => [4, 6].includes(value),
  },
});

const emit = defineEmits(['pin-complete']);

const pin = ref('');
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const addDigit = (num) => {
  if (pin.value.length < props.pinLength) {
    pin.value += num;
  }
};

const clearPin = () => {
  pin.value = '';
};

watch(pin, (newVal) => {
  if (newVal.length === props.pinLength) {
    emit('pin-complete', newVal);
  }
});
</script>

<style scoped>
.pin-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  padding: 20px;
  border-radius: 12px;
  background-color: var(--background-color);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  margin: 0 auto;
}

.pin-title {
  font-family: var(--font-general);
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--text-color);
}

.pin-dots {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.pin-dot {
  width: 20px;
  height: 20px;
  background-color: #ddd; /* inactivo */
  border-radius: 50%;
  transition: background-color 0.3s;
}

.pin-dot.filled {
  background-color: var(--text-color); /* activo */
}

.num-pad {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.num-pad button {
  width: 60px;
  height: 60px;
  font-size: 1.5rem;
  background-color: #ccc;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.num-pad button:hover {
  background-color: #bbb;
}

.delete-icon {
  font-size: 2rem;
  color: var(--text-color);
  justify-self: center;
  align-self: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
