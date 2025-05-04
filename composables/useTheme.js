export const useTheme = () => {
  const theme = useState("theme", () => "light");

  const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
    document.documentElement.classList.toggle(
      "dark-mode",
      theme.value === "dark"
    );
    localStorage.setItem("theme", theme.value);
  };

  onMounted(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    theme.value = savedTheme;
    document.documentElement.classList.toggle(
      "dark-mode",
      theme.value === "dark"
    );
  });

  return { theme, toggleTheme };
};
