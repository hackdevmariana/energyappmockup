<template>
  <div class="contenedor">
    <component :is="componente" v-bind="props"></component>
  </div>
</template>

<script setup>
defineProps({
  componente: {
    type: [Object, String],
    required: true
  },
  props: {
    type: Object,
    default: () => ({})
  }
});
</script>

<style scoped>
.contenedor {
  width: 90vw;
  margin: auto;
  border: 2px solid #000;
  padding: 20px;
}
</style>
