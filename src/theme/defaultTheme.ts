import { componentColors } from './componentColors';
import { semanticColors } from './semanticColors';
import { Theme } from './Theme.types';
import { colorTokens } from './tokens/color';

import { componentTypography } from '@/theme/componentTypography';
import { semanticShadow } from '@/theme/semanticShadow';
import { semanticTypography } from '@/theme/semanticTypography';
import { shadowTokens } from '@/theme/tokens/shadow';

export const defaultTheme: Theme = {
  fontFamily: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`,
  colors: {
    tokens: colorTokens,
    semantic: semanticColors,
    components: componentColors
  },
  typography: {
    semantic: semanticTypography,
    components: componentTypography
  },
  shadows: {
    tokens: shadowTokens,
    semantic: semanticShadow
  }
};
