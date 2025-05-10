/* Colors */
import { shadowTokens } from '@/theme/tokens/shadow';

export interface ColorScale {
  25?: string;
  40?: string;
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  1000: string;
}

type AlphaColorType = 'white' | 'black';

export type AlphaScale = {
  [type in AlphaColorType]?: string;
} & {
  5: string;
  10: string;
  15?: string;
  20: string;
  25: string;
  30: string;
  45: string;
  50: string;
  65: string;
  85: string;
  95: string;
};

type ThemeType = 'light' | 'dark';

/* Base Tokens */
export interface ColorTokens {
  neutral: ColorScale;
  grey: ColorScale;
  violet: ColorScale;
  blue: ColorScale;
  red: ColorScale;
  teal: ColorScale;
  yellow: ColorScale;
}

/* Theme Colors */
export interface BaseColors {
  black: string;
  white: string;
}

export interface ThemeColors {
  brand: ColorScale;
  subBrand: ColorScale;
  neutral: ColorScale;
  critical: ColorScale;
  information: ColorScale;
  success: ColorScale;
  warning: ColorScale;
  base: BaseColors;
}

export interface ColorState {
  default: string;
  hover: string;
  active: string;
}

export interface ColorVariant {
  light: ColorState;
  normal: ColorState;
  dark: ColorState;
  darker?: string;
  black?: string;
}

export interface SemanticColors {
  primary: ColorVariant;
  secondary: ColorVariant;
  neutral: ColorVariant;
  information: ColorVariant;
  success: ColorVariant;
  critical: ColorVariant;
  white: ColorState;
  alpha: {
    [type in AlphaColorType]: AlphaScale;
  };
}

export interface SemanticThemeColor {
  light: SemanticColors;
  dark: SemanticColors;
}

/* Component colors */
export interface BackgroundColors {
  primary: string;
  secondary: string;
  tertiary: string;
  brand: string;
  brandHover: string;
  brandPressed: string;
  dim: string;
  disabled: string;
  input: string;
  toast: string;
  tooltip: string;
}

export interface TextColors {
  active: string;
  default: string;
  mute: string;
  disabled: string;
  brand: string;
  brandPressed: string;
  brandHover: string;
  critical: string;
  criticalBold: string;
  info: string;
  infoBold: string;
  success: string;
  successBold: string;
  warning: string;
  warningBold: string;
  inverse: string;
}

export interface BorderColors {
  primary: string;
  secondary: string;
  tertiary: string;
  disabled: string;
  focusedRing: string;
}

export type ComponentColors = {
  [type in ThemeType]: {
    text: TextColors;
    bg: BackgroundColors;
    border: BorderColors;
  };
};

/* Typography */
export type TypographySize =
  | 'xsm'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';
export type SemanticTypographyType = 'display' | 'heading' | 'body';
export type ComponentTypographyType = 'label' | 'button';

export interface TypographyType {
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
}

export type SemanticTypography = {
  [type in SemanticTypographyType]: {
    [size in TypographySize]?: TypographyType;
  };
};

export type ComponentTypography = {
  [type in ComponentTypographyType]: {
    [size in TypographySize]?: TypographyType;
  };
};

/* Shadow */
export type ShadowType = typeof shadowTokens;
export interface SemanticShadow {
  elevationShadow2: string;
  elevationShadow4: string;
  elevationShadow8: string;
  elevationShadow16: string;
}

/* Theme */
export interface Theme {
  fontFamily: string;
  colors: {
    tokens: ColorTokens;
    theme: ThemeColors;
    semantic: SemanticThemeColor;
    components: ComponentColors;
  };
  typography: {
    semantic: SemanticTypography;
    components: ComponentTypography;
  };
  shadows: {
    tokens: ShadowType;
    semantic: SemanticShadow;
  };
}
