<script setup>
import Navbar from "~/components/Navbar.vue";
import BottonNav from "~/components/BottonNav.vue";
import DividingLine from "~/components/DividingLine.vue";
</script>

<template>

  <div class="page-container">
    <Navbar />
    <DividingLine />
    <slot />
    <div class="spacer"></div> 
    <BottonNav />

  </div>
</template>
<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.spacer {
  height: 150px; 
}
</style>

