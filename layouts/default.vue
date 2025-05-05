<script setup>
import Navbar from "~/components/Navbar.vue";
import BottonNav from "~/components/BottonNav.vue";
</script>

<template>
  <div>
    <Navbar />
    <slot />
    <BottonNav />

  </div>
</template>
