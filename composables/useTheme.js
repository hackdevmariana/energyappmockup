import { useColorMode } from "#imports";

export const useTheme = () => {
  const colorMode = useColorMode();

  // 🔹 Cargar la preferencia almacenada al iniciar la app
  if (import.meta.client) {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      colorMode.preference = savedTheme;
    }
  }

  const toggleTheme = () => {
    colorMode.preference = colorMode.preference === "light" ? "dark" : "light";
    localStorage.setItem("theme", colorMode.preference); // 🔥 Guarda el estado del usuario
  };

  return { colorMode, toggleTheme };
};
