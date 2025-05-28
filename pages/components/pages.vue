<script setup lang="ts">
import Todaysprice from '../pages/todaysprice.vue';

</script>

<template>
  <div class="container-center">
    <ButtonComponent :text="'Precios de hoy'" :url="'~/pages/todaysprice'" />

    <h1>Precios de mañana</h1>
    <ElectricityPriceTomorrow />
    <h1>Seleccionar el día</h1>
    <ElectricityPriceByDate />
    <h1>BitcoinCalc</h1>
    <BitcoinCalc />

    <h1>EnergyGenerationStructure</h1>
    <EnergyGenerationStructure />
    <h1>TextIntroduction</h1>
    <TextIntroduction text="EnergyAPP" />
    <h1>TextAnimation</h1>
    <TextAnimation text="EnergyAPP" />
  </div>
</template>