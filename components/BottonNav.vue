<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <nav class="navigation-card">
    <a @click="router.push('/energy')" class="tab">
      <i class="bi bi-lightning-fill"></i>
    </a>
    <a @click="router.push('/market')" class="tab">
      <i class="bi bi-cart-fill"></i>
    </a>
    <a @click="router.push('/')" class="tab">
      <i class="bi bi-house-fill"></i>
    </a>
    <a @click="router.push('/balance')" class="tab">
      <i class="bi bi-currency-bitcoin"></i>
    </a>
    <a @click="router.push('/cooperatives')" class="tab">
      <i class="bi bi-people-fill"></i>
    </a>
  </nav>
</template>

<style scoped>
.navigation-card {
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 15px;
  background-color: white;
  padding: 10px;
  border-radius: 25px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.tab {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f4;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
}

.tab:hover {
  background-color: #ddd;
  transform: scale(1.1);
}

i {
  font-size: 24px;
  color: black;
}
</style>
