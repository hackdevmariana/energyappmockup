<template>
  <div class="container-center">
    <h1>Formulario de prueba</h1>
    <FloatingLabelInput labelText="Nombre" />
    <FloatingLabelInput labelText="Correo electrónico" />
    <FloatingLabelInput labelText="Teléfono" />
    <h1>Colecciones de componentes</h1>

    <HoverCard colorClass="red" tipText="Gráficos" link="/components/charts" />
    <HoverCard
      colorClass="green"
      tipText="Contenedores"
      link="/components/containers"
    />

    <h1>Animación de palabras</h1>
    <WordLoader
      :words="['energía', 'solar', 'cooperativas', 'consumo', 'ahorro']"
    />
  </div>
</template>

<style scoped>
.container-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  text-align: center;
}
</style>
