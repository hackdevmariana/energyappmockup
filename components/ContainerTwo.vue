<!-- USE:
 
<ContainerTwo :componente1="ComponenteCard" :props1="{ titulo: 'Card 1', contenido: 'Este es el contenido de la primera tarjeta' }"
            :componente2="ComponenteCard" :props2="{ titulo: 'Card 2', contenido: 'Este es el contenido de la segunda tarjeta' }" />

-->
<template>
  <div class="contenedor">
    <div class="componente">
      <component :is="componente1" v-bind="props1"></component>
    </div>
    <div class="componente">
      <component :is="componente2" v-bind="props2"></component>
    </div>
  </div>
</template>

<script setup>
defineProps({
  componente1: {
    type: [Object, String],
    required: true
  },
  componente2: {
    type: [Object, String],
    required: true
  },
  props1: {
    type: Object,
    default: () => ({})
  },
  props2: {
    type: Object,
    default: () => ({})
  }
});
</script>

<style scoped>
.contenedor {
  width: 90vw;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: auto;
  padding: 20px;
}

.componente {
  width: 45%;
  border: 2px solid #000;
  padding: 15px;
  text-align: center;
}
</style>
