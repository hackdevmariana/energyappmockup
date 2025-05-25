<script setup lang="ts">
import PowerButton from "~/components/PowerButton.vue";
</script>

<template>
  <div class="container-center">
    <h1>AnimatedHeader</h1>
    <AnimatedHeader title="EnergyAPP" />
    <h1>PowerButton</h1>
    <PowerButton label="Encender" labelTwo="Apagar" checkboxId="toggle-1" />

    <h1>GlitchText</h1>
    <GlitchText text="ENERGY" />
    <h1>ArticleFeedback</h1>
    <ArticleFeedback
      heading="¿Te ha sido útil este artículo?"
      yesLabel="Sí"
      noLabel="No"
    />

    <h1>ActivateHeart</h1>

    <ActivateHeart />

    <h1>EnergyButton</h1>
    <EnergyButton text="Ver consumo" url="/energy-dashboard" />
<h1>ButtonComponent</h1>
    <ButtonComponent text="Nuxt" url="https://nuxt.com" />
  </div>
</template>
