import { defineStore } from "pinia";

export const useThemeStore = defineStore("themeStore", {
  state: () => ({
    theme: localStorage.getItem("theme") || "light", // 🔥 Persistencia en localStorage
  }),

  actions: {
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", this.theme); // 🔹 Guarda el estado en localStorage
      document.documentElement.classList.toggle("dark-mode", this.theme === "dark");
    },

    applyTheme() {
      document.documentElement.classList.toggle("dark-mode", this.theme === "dark");
    },
  },

  persist: true, // 🔥 Activa persistencia si usas el módulo Pinia Persist (opcional)
});
