<script setup lang="ts">
import InputUnderline from "~/components/InputUnderline.vue";
</script>

<template>
  <div class="container-center">
    <InputUnderline
      label="Nombre"
      placeholder="Introduce tu nombre"
      inputId="name-input"
    />
    <InputUnderline
      label="Correo"
      placeholder="Introduce tu correo"
      inputId="email-input"
    />
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
