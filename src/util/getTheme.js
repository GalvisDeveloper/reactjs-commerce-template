import themes from "../constants/theme";
import { dark, light, basic } from "../themes/index";

export const getTheme = (themeName) => {
  switch (themeName) {
    case themes.dark:
      return dark;
    case themes.light:
      return light;
    default:
      return basic;
  }
};
