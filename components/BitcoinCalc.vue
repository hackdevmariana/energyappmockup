<template>
  <div class="contenedor">
    <!-- Precio actual de Bitcoin -->
    <AnimatedContainer
      topLine="Precio de Bitcoin"
      :quantity="btcPrice ? btcPrice + ' €' : 'Cargando...'"
      bottomLine="EUR/BTC"
      backgroundColor="var(--secondary-color)"
    />

    <!-- Conversión EUR ↔ BTC -->
    <div class="converter">
      <label>Euros (€)</label>
      <input v-model="euroAmount" type="text" placeholder="Introduce EUR" />

      <label>Bitcoin (BTC)</label>
      <input v-model="btcAmount" type="text" placeholder="Introduce BTC" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import AnimatedContainer from '@/components/AnimatedContainer.vue';

const btcPrice = ref(null);
const euroAmount = ref(1);
const btcAmount = ref(null);

const fetchBtcPrice = async () => {
  try {
    const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur");
    const data = await response.json();
    btcPrice.value = data.bitcoin.eur;
  } catch (error) {
    console.error("Error al obtener el precio de Bitcoin:", error);
  }
};

// Reactividad: Calcula automáticamente cuando el usuario introduce valores
watch(btcAmount, (newValue) => { euroAmount.value = (newValue * btcPrice.value).toFixed(2); });
watch(euroAmount, (newValue) => { btcAmount.value = (newValue / btcPrice.value).toFixed(6); });

onMounted(fetchBtcPrice);
</script>

<style scoped>
.contenedor {
  width: 90%;
  margin: 0 auto;
  text-align: center;
}

.converter {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}

input {
  width: 80%;
  padding: 10px;
  font-size: 1.2rem;
  border: 2px solid var(--text-color);
  border-radius: 8px;
  text-align: center;
  outline: none;
}

/* Elimina las flechitas en navegadores Webkit (Chrome, Safari, Edge) */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Elimina flechitas en Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
