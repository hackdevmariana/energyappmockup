<script setup>
import Navbar from "~/components/Navbar.vue";
import BottonNav from "~/components/BottonNav.vue";
import DividingLine from "~/components/DividingLine.vue";
</script>

<template>
  <div>
    <Navbar />
    <DividingLine />
    <slot />
    <BottonNav />

  </div>
</template>
