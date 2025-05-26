import { defineStore } from "pinia";

export const useThemeStore = defineStore("themeStore", {
  state: () => ({
    theme: localStorage.getItem("theme") || "light",
  }),

  actions: {
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", this.theme);
      document.documentElement.classList.toggle("dark-mode", this.theme === "dark");
    },

    applyTheme() {
      document.documentElement.classList.toggle("dark-mode", this.theme === "dark");
    },
  },
});
