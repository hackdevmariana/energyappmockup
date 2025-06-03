<script setup lang="ts">
import GeneratedEnergy from '~/components/energy/GeneratedEnergy.vue';
import ConsumedEnergy from '~/components/energy/ConsumedEnergy.vue';

</script>

<template>
    <GeneratedEnergy :energy="8.2"/>
    <ConsumedEnergy :energy="6.1"/>
</template>