<script setup lang="ts">
import GeneratedEnergy from '~/components/energy/GeneratedEnergy.vue';
import ConsumedEnergy from '~/components/energy/ConsumedEnergy.vue';
import ExportedEnergy from '~/components/energy/ExportedEnergy.vue';
import StoredEnergy from '~/components/energy/StoredEnergy.vue';
import EstimatedEarnings from '~/components/energy/EstimatedEarnings.vue';

</script>

<template>
  <div class="container-90">

    <GeneratedEnergy :energy="8.2"/>
    <ConsumedEnergy :energy="6.1" />
    <ExportedEnergy :energy="3.7" />
    <StoredEnergy :energy="12.5" />
    <EstimatedEarnings :earnings="196.4" />
  </div>
</template>