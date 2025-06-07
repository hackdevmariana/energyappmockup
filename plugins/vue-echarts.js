import VueECharts from "vue-echarts";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";

export default defineNuxtPlugin((nuxtApp) => {
  use([CanvasRenderer]); // Asegura que `CanvasRenderer` está disponible antes de que `VChart` lo requiera.

  nuxtApp.vueApp.component("VChart", VueECharts);
});
