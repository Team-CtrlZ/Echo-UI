import { SemanticColors } from "./Theme.types";
import { colorTokens } from "./tokens/color";

export const semanticColors: SemanticColors = {
  primary: {
    default: colorTokens.violet500,
    hover: colorTokens.violet700,
    text: colorTokens.white
  },
  text: {
    default: colorTokens.black,
    subdued: colorTokens.violet50
  }
};
