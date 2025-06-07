<script setup lang="ts">
import Todaysprice from '../pages/todaysprice.vue';

</script>

<template>
  <div class="container-center">
    <br>
    <ButtonComponent :text="'Precios de hoy'" :url="'/pages/todaysprice'" />
    <br>
    <ButtonComponent :text="'Precios de mañana'" :url="'/pages/tomorrowsprice'" />
    <br>
    <ButtonComponent :text="'Precios por día'" :url="'/pages/pricesperday'" />
    <br>
    <ButtonComponent :text="'Calculadora Euro / bitcoin'" :url="'/pages/bitcoincalc'" />
    <br>
    <ButtonComponent :text="'Carga de la aplicación'" :url="'/pages/textintroduction'" />
    <br>
    <ButtonComponent :text="'Otra carga'" :url="'/pages/textanimation'" />
    
  </div>
</template>