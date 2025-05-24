<template>
  <div>
    <br /><br />
    <h1>AnimatedContainer</h1>
    <AnimatedContainer
      topLine="Saldo"
      quantity="1000"
      bottomLine="euros"
      backgroundColor="var(--expenses-color)"
    />
    <h1>CurrentElectricityPrice</h1>
    <CurrentElectricityPrice />
    <h1>ElectricityPriceToday</h1>
    <ElectricityPriceToday />
  </div>
</template>
<script setup>
definePageMeta({
  layout: "default",
});
</script>
