<template>
  <div>
    <br /><br />
    <h1>SemiCircleProgress</h1>
    <SemiCircleProgress :percentage="85" />
<h1>SemiCircleProgressWithTotal</h1>
    <SemiCircleProgressWithTotal :percentage="15" :capacity="50" />
    <h1>AnimatedContainer</h1>
    <AnimatedContainer topLine="Saldo" quantity="1000" bottomLine="euros" backgroundColor="var(--expenses-color)" />
    <h1>CurrentElectricityPrice</h1>
    <CurrentElectricityPrice />
    <h1>LowestElectricityPrice</h1>
    <LowestElectricityPrice />
    <h1>HighestElectricityPrice</h1>
    <HighestElectricityPrice />
    <h1>AverageElectricityPrice</h1>
    <AverageElectricityPrice />
    <h1>DifferentialElectricityPrice</h1>
    <DifferentialElectricityPrice />
    <h1>ActualForecastScheduledDemand</h1>
    <ActualForecastScheduledDemand />
    <h1>Map</h1>
    <Map />
  </div>
</template>
<script setup>
definePageMeta({
  layout: "default",
});
</script>
