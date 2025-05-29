<script setup>
import { ref, onMounted } from "vue";

const mapElement = ref(null);

onMounted(async () => {
  if (process.client && mapElement.value) {
    const L = await import("leaflet");
    const map = L.map(mapElement.value).setView([40.4165, -3.70256], 6);
    
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap",
    }).addTo(map);
  }
});
</script>

<template>
  <div class="map-container">
    <div ref="mapElement" class="map"></div> 
  </div>
</template>


<style scoped>
.map-container {
  width: 90%;
  height: 500px;
}

.map {
  width: 100%;
  height: 100%;
}
</style>
