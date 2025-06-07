<template>
  <div class="product-card">
    <img :src="image" :alt="name" class="product-image" />
    <h3 class="product-title">{{ name }}</h3>
    <p class="product-description">{{ description }}</p>
    <span class="product-price">{{ price.toFixed(2) }} €</span>
    <br>
    <button class="buy-button" @click="handleBuy">Comprar</button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  name: String,
  description: String,
  price: Number,
  image: String
});

const handleBuy = () => {
  alert(`Has seleccionado ${props.name}`);
};
</script>

<style scoped>
.product-card {
  width: 250px;
  padding: 15px;
  border-radius: 10px;
  background-color: var(--background-color);
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

.product-title {
  font-size: 1.2rem;
  margin: 10px 0;
}

.product-description {
  font-size: 0.9rem;
  color: var(--text-color);
}

.product-price {
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--primary-color);
}

.buy-button {
  margin-top: 10px;
  padding: 10px;
  background-color: var(--secondary-color);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
