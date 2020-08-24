import { createContext } from "react";

export const themes = {
  light: {
    label: "light",
    isLightTheme: true,
  },
  dark: {
    label: "dark",
    isLightTheme: false,
  },
};

export const ThemeContext = createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});
