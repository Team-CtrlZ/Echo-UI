import { ComponentColors } from "./Theme.types";
import { semanticColors } from "./semanticColors";

export const componentColors: ComponentColors = {
  button: {
    bg: {
      default: semanticColors.primary.default,
      hover: semanticColors.primary.hover
    },
    text: semanticColors.text.default
  }
};
