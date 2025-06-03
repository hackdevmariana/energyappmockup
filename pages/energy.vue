<script setup lang="ts">
import GeneratedEnergy from '~/components/energy/GeneratedEnergy.vue';
import ConsumedEnergy from '~/components/energy/ConsumedEnergy.vue';
import ExportedEnergy from '~/components/energy/ExportedEnergy.vue';

</script>

<template>
    <GeneratedEnergy :energy="8.2"/>
    <ConsumedEnergy :energy="6.1" />
    <ExportedEnergy :energy="3.7" />
</template>