<template>
  <div class="products-container">
    <h2>Productos de energía</h2>
    <div class="products-grid">
      <ProductCard
        v-for="(product, index) in products"
        :key="index"
        :name="product.name"
        :description="product.description"
        :price="product.price"
        :image="product.image"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProductCard from '@/components/ProductCard.vue';

const products = ref([
  { name: "Panel Solar", description: "Alta eficiencia de conversión", price: 199.99, image: "/images/panel-solar.jpg" },
  { name: "Batería Tesla", description: "Almacena energía para tu hogar", price: 5999.99, image: "/images/bateria-tesla.jpg" },
  { name: "Bombilla LED", description: "Ahorro energético del 80%", price: 9.99, image: "/images/bombilla-led.jpg" }
]);
</script>

<style scoped>
.products-container {
  text-align: center;
}

.products-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
</style>
