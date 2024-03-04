import { App } from "./elements";
import { saveInLocalStorage } from "./localStorage";

export const toggleDarkTheme = () => {
  App.classList.toggle("isDark");
  saveInLocalStorage("darkMode", App.classList.contains("isDark"));
};
