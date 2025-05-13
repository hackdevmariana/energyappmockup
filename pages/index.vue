<script setup lang="ts">
import InputUnderline from "~/components/InputUnderline.vue";
import HoverCard from "~/components/HoverCard.vue";
import MenuCard from "~/components/MenuCard.vue";
import BatteryCharging from "~/components/BatteryCharging.vue";
import ToggleButton from "~/components/ToggleButton.vue";
</script>

<template>
  <div class="container-center">
    <ToggleButton label="Encender" labelTwo="Apagar" checkboxId="toggle-1" />
    <h1>Texto con Glitch</h1>
    <GlitchText text="ENERGY" />
    <BatteryCharging />
    <ArticleFeedback
      heading="¿Te ha sido útil este artículo?"
      yesLabel="Sí"
      noLabel="No"
    />
    <ActivateHeart />
    <GliderRadio
      :options="[
        { label: 'Gratis', value: 'free' },
        { label: 'Básico', value: 'basic' },
        { label: 'Premium', value: 'premium' },
      ]"
    />
    <MenuCard />
    <h1>Colecciones de componentes</h1>

    <HoverCard colorClass="red" tipText="Gráficos" link="/components/charts" />
    <HoverCard
      colorClass="green"
      tipText="Contenedores"
      link="/components/containers"
    />
    <HoverCard
      colorClass="primary"
      tipText="Formularios"
      link="/components/forms"
    />

    <h1>Animación de palabras</h1>
    <WordLoader
      :words="['energía', 'solar', 'cooperativas', 'consumo', 'ahorro']"
    />
  </div>
</template>
