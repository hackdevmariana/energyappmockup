<template>
  <h1>Colecciones de componentes</h1>
  <NuxtLink to="/components/charts">Gráficos</NuxtLink>
  <br />
  <NuxtLink to="/components/containers">Contenedores</NuxtLink>

  <HoverCard
    colorClass="red"
    tipText="¡Oferta Especial!"
    secondText="Descuento del 20%"
  />
  <HoverCard
    colorClass="primary"
    tipText="Nuevo Producto"
    secondText="Disponible ahora"
  />
  <HoverCard
    colorClass="green"
    tipText="Eco-Friendly"
    secondText="100% energía renovable"
  />
  <HoverCard
    colorClass="secondary"
    tipText="Secondary"
    secondText="Color secundario"
  />
</template>
