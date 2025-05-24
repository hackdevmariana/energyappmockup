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
    <h1>ElectricityPriceTomorrow</h1>
    <ElectricityPriceTomorrow />
    <h1>ActualForecastScheduledDemand</h1>
    <ActualForecastScheduledDemand />
  </div>
</template>
<script setup>
definePageMeta({
  layout: "default",
});
</script>
