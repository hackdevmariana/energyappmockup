export default defineNuxtPlugin(() => {
  if (import.meta.client) { 
    return {
      provide: {
        leaflet: import("leaflet"),
      },
    };
  }
});

