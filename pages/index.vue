<script setup lang="ts">
import { ref } from "vue";
import InputUnderline from "~/components/InputUnderline.vue";
import HoverCard from "~/components/HoverCard.vue";
import MenuCard from "~/components/MenuCard.vue";
import BatteryCharging from "~/components/BatteryCharging.vue";
import EnergyModal from "@/components/EnergyModal.vue";

const modalOpen = ref(false);
</script>

<template>
  <div class="container-center">
    <button @click="modalOpen = true" class="open-modal-btn">Abrir Modal</button>
  <EnergyModal :isOpen="modalOpen" :closeModal="() => (modalOpen = false)">
    <h2>Información energética</h2>
    <p>Consulta tu consumo eléctrico y ajusta tu configuración.</p>
  </EnergyModal>

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
    <HoverCard colorClass="negate" tipText="Extra" link="/components/extra" />



  </div>
</template>
<style scoped>
.open-modal-btn {
  background: #ffcc00;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
}

.open-modal-btn:hover {
  background: #ffaa00;
}
</style>

