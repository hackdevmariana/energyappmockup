export const useTheme = () => {
  const theme = useState("theme", () => "light");

  const applyTheme = () => {
    document.documentElement.classList.toggle("dark-mode", theme.value === "dark");
    document.body.classList.toggle("dark-mode", theme.value === "dark");
  };

  const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
    localStorage.setItem("theme", theme.value);
    applyTheme(); // Aplicar el tema después de cambiarlo
  };

  onMounted(() => {
    theme.value = localStorage.getItem("theme") || "light";
    applyTheme();
  });

  return { theme, toggleTheme };
};
