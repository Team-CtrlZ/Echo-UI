import { Theme } from "./Theme.types";
import { colorTokens } from "./tokens/color";
import { semanticColors } from "./semanticColors";
import { componentColors } from "./componentColors";

export const defaultTheme: Theme = {
  fontFamily: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`,
  colors: {
    tokens: colorTokens,
    semantic: semanticColors,
    components: componentColors
  }
};
