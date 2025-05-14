<script setup lang="ts">
import InputUnderline from "~/components/InputUnderline.vue";
import HoverCard from "~/components/HoverCard.vue";
import MenuCard from "~/components/MenuCard.vue";
import BatteryCharging from "~/components/BatteryCharging.vue";
</script>

<template>
  <div class="container-center">
    <BatteryCharging />

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
    <HoverCard colorClass="secondary" tipText="UI" link="/components/ui" />

    <h1>Animación de palabras</h1>
    <WordLoader
      :words="['energía', 'solar', 'cooperativas', 'consumo', 'ahorro']"
    />
  </div>
</template>
