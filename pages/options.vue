<template>
  <h1>GliderRadio</h1>
  <GliderRadio
    :options="[
      { label: 'Gratis', value: 'free' },
      { label: 'Básico', value: 'basic' },
      { label: 'Premium', value: 'premium' },
    ]"
  />
  <h1>MenuCard</h1>
  <MenuCard />
</template>
