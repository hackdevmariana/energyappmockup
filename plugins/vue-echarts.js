export default defineNuxtPlugin((nuxtApp) => {
  if (!process.client) return; // Asegura que solo se ejecuta en el cliente

  import("echarts/core").then(({ use }) => {
    import("echarts/renderers").then(({ CanvasRenderer }) => {
      use([CanvasRenderer]);
    });
  });
});
