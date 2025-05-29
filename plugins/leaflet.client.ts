export default defineNuxtPlugin(() => {
  if (process.client) {
    return {
      provide: {
        leaflet: import("leaflet"),
      },
    };
  }
});
