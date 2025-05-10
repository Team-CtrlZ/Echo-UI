import {
  AlphaScale,
  ColorState,
  ColorVariant,
  SemanticThemeColor
} from './Theme.types';

import { themeColors } from '@/theme/ThemeColors';

const primaryLightColors: ColorVariant = {
  light: {
    default: themeColors.brand['50'],
    hover: themeColors.brand['100'],
    active: themeColors.brand['200']
  },
  normal: {
    default: themeColors.brand['500'],
    hover: themeColors.brand['600'],
    active: themeColors.brand['700']
  },
  dark: {
    default: themeColors.brand['700'],
    hover: themeColors.brand['800'],
    active: themeColors.brand['900']
  },
  darker: themeColors.brand['1000']
};

const primaryDarkColors: ColorVariant = {
  light: {
    default: themeColors.brand['1000'],
    hover: themeColors.brand['900'],
    active: themeColors.brand['800']
  },
  normal: {
    default: themeColors.brand['500'],
    hover: themeColors.brand['400'],
    active: themeColors.brand['300']
  },
  dark: {
    default: themeColors.brand['300'],
    hover: themeColors.brand['200'],
    active: themeColors.brand['100']
  },
  darker: themeColors.brand['50']
};

const secondaryLightColors: ColorVariant = {
  light: {
    default: themeColors.subBrand['50'],
    hover: themeColors.subBrand['100'],
    active: themeColors.subBrand['200']
  },
  normal: {
    default: themeColors.subBrand['500'],
    hover: themeColors.subBrand['600'],
    active: themeColors.subBrand['700']
  },
  dark: {
    default: themeColors.subBrand['700'],
    hover: themeColors.subBrand['800'],
    active: themeColors.subBrand['900']
  },
  darker: themeColors.subBrand['1000']
};

const secondaryDarkColors: ColorVariant = {
  light: {
    default: themeColors.subBrand['1000'],
    hover: themeColors.subBrand['900'],
    active: themeColors.subBrand['800']
  },
  normal: {
    default: themeColors.subBrand['500'],
    hover: themeColors.subBrand['400'],
    active: themeColors.subBrand['300']
  },
  dark: {
    default: themeColors.subBrand['300'],
    hover: themeColors.subBrand['200'],
    active: themeColors.subBrand['100']
  },
  darker: themeColors.subBrand['50']
};

const neutralLightColors: ColorVariant = {
  light: {
    default: themeColors.neutral['50'],
    hover: themeColors.neutral['100'],
    active: themeColors.neutral['200']
  },
  normal: {
    default: themeColors.neutral['500'],
    hover: themeColors.neutral['600'],
    active: themeColors.neutral['700']
  },
  dark: {
    default: themeColors.neutral['700'],
    hover: themeColors.neutral['800'],
    active: themeColors.neutral['900']
  },
  darker: themeColors.neutral['1000'],
  black: themeColors.base.black
};

const neutralDarkColors: ColorVariant = {
  light: {
    default: themeColors.neutral['1000'],
    hover: themeColors.neutral['900'],
    active: themeColors.neutral['800']
  },
  normal: {
    default: themeColors.neutral['500'],
    hover: themeColors.neutral['400'],
    active: themeColors.neutral['300']
  },
  dark: {
    default: themeColors.neutral['300'],
    hover: themeColors.neutral['200'],
    active: themeColors.neutral['100']
  },
  darker: themeColors.neutral['50'],
  black: themeColors.base.white
};

const informationLightColors: ColorVariant = {
  light: {
    default: themeColors.information['50'],
    hover: themeColors.information['100'],
    active: themeColors.information['200']
  },
  normal: {
    default: themeColors.information['500'],
    hover: themeColors.information['600'],
    active: themeColors.information['700']
  },
  dark: {
    default: themeColors.information['700'],
    hover: themeColors.information['800'],
    active: themeColors.information['900']
  },
  darker: themeColors.information['1000']
};

const informationDarkColors: ColorVariant = {
  light: {
    default: themeColors.information['1000'],
    hover: themeColors.information['900'],
    active: themeColors.information['800']
  },
  normal: {
    default: themeColors.information['500'],
    hover: themeColors.information['400'],
    active: themeColors.information['300']
  },
  dark: {
    default: themeColors.information['300'],
    hover: themeColors.information['200'],
    active: themeColors.information['100']
  },
  darker: themeColors.information['50']
};

const successLightColors: ColorVariant = {
  light: {
    default: themeColors.success['50'],
    hover: themeColors.success['100'],
    active: themeColors.success['200']
  },
  normal: {
    default: themeColors.success['500'],
    hover: themeColors.success['600'],
    active: themeColors.success['700']
  },
  dark: {
    default: themeColors.success['700'],
    hover: themeColors.success['800'],
    active: themeColors.success['900']
  },
  darker: themeColors.success['1000']
};

const successDarkColors: ColorVariant = {
  light: {
    default: themeColors.success['1000'],
    hover: themeColors.success['900'],
    active: themeColors.success['800']
  },
  normal: {
    default: themeColors.success['500'],
    hover: themeColors.success['400'],
    active: themeColors.success['300']
  },
  dark: {
    default: themeColors.success['300'],
    hover: themeColors.success['200'],
    active: themeColors.success['100']
  },
  darker: themeColors.success['50']
};

const criticalLightColors: ColorVariant = {
  light: {
    default: themeColors.critical['50'],
    hover: themeColors.critical['100'],
    active: themeColors.critical['200']
  },
  normal: {
    default: themeColors.critical['500'],
    hover: themeColors.critical['600'],
    active: themeColors.critical['700']
  },
  dark: {
    default: themeColors.critical['700'],
    hover: themeColors.critical['800'],
    active: themeColors.critical['900']
  },
  darker: themeColors.critical['1000']
};

const criticalDarkColors: ColorVariant = {
  light: {
    default: themeColors.critical['1000'],
    hover: themeColors.critical['900'],
    active: themeColors.critical['800']
  },
  normal: {
    default: themeColors.critical['500'],
    hover: themeColors.critical['400'],
    active: themeColors.critical['300']
  },
  dark: {
    default: themeColors.critical['300'],
    hover: themeColors.critical['200'],
    active: themeColors.critical['100']
  },
  darker: themeColors.critical['50']
};

const whiteLightColors: ColorState = {
  default: themeColors.base.white,
  hover: themeColors.subBrand['25'] as string,
  active: themeColors.subBrand['40'] as string
};

const whiteDarkColors: ColorState = {
  default: themeColors.subBrand['900'],
  hover: themeColors.subBrand['800'],
  active: themeColors.subBrand['700']
};

const alphaWhiteLightColors: AlphaScale = {
  5: 'rgba(255, 255, 255, 0.05)',
  10: 'rgba(255, 255, 255, 0.1)',
  15: 'rgba(255, 255, 255, 0.15)',
  20: 'rgba(255, 255, 255, 0.2)',
  25: 'rgba(255, 255, 255, 0.25)',
  30: 'rgba(255, 255, 255, 0.3)',
  45: 'rgba(255, 255, 255, 0.45)',
  50: 'rgba(255, 255, 255, 0.50)',
  65: 'rgba(255, 255, 255, 0.65)',
  85: 'rgba(255, 255, 255, 0.85)',
  95: 'rgba(255, 255, 255, 0.95)',
  white: 'rgba(255, 255, 255, 1)'
};

const alphaWhiteDarkColors: AlphaScale = {
  5: 'rgba(12, 17, 29, 0.05)',
  10: 'rgba(12, 17, 29, 0.1)',
  15: 'rgba(12, 17, 29, 0.15)',
  20: 'rgba(12, 17, 29, 0.2)',
  25: 'rgba(12, 17, 29, 0.25)',
  30: 'rgba(12, 17, 29, 0.3)',
  45: 'rgba(12, 17, 29, 0.45)',
  50: 'rgba(12, 17, 29, 0.5)',
  65: 'rgba(12, 17, 29, 0.65)',
  85: 'rgba(12, 17, 29, 0.85)',
  95: 'rgba(12, 17, 29, 0.95)',
  white: 'rgba(12, 17, 29, 1)'
};

const alphaBlackLightColors: AlphaScale = {
  5: 'rgba(0, 0, 0, 0.05)',
  10: 'rgba(0, 0, 0, 0.1)',
  15: 'rgba(0, 0, 0, 0.15)',
  20: 'rgba(0, 0, 0, 0.2)',
  25: 'rgba(0, 0, 0, 0.25)',
  30: 'rgba(0, 0, 0, 0.3)',
  45: 'rgba(0, 0, 0, 0.45)',
  50: 'rgba(0, 0, 0, 0.5)',
  65: 'rgba(0, 0, 0, 0.65)',
  85: 'rgba(0, 0, 0, 0.85)',
  95: 'rgba(0, 0, 0, 0.95)',
  black: 'rgba(0, 0, 0, 1)'
};

const alphaBlackDarkColors: AlphaScale = {
  5: 'rgba(255, 255, 255, 0.05)',
  10: 'rgba(255, 255, 255, 0.1)',
  15: 'rgba(255, 255, 255, 0.15)',
  20: 'rgba(255, 255, 255, 0.2)',
  25: 'rgba(255, 255, 255, 0.25)',
  30: 'rgba(255, 255, 255, 0.3)',
  45: 'rgba(255, 255, 255, 0.45)',
  50: 'rgba(255, 255, 255, 0.5)',
  65: 'rgba(255, 255, 255, 0.65)',
  85: 'rgba(255, 255, 255, 0.85)',
  95: 'rgba(255, 255, 255, 0.95)',
  black: 'rgba(255, 255, 255, 1)'
};

export const semanticColors: SemanticThemeColor = {
  light: {
    primary: primaryLightColors,
    secondary: secondaryLightColors,
    neutral: neutralLightColors,
    information: informationLightColors,
    success: successLightColors,
    critical: criticalLightColors,
    white: whiteLightColors,
    alpha: {
      white: alphaWhiteLightColors,
      black: alphaBlackLightColors
    }
  },
  dark: {
    primary: primaryDarkColors,
    secondary: secondaryDarkColors,
    neutral: neutralDarkColors,
    information: informationDarkColors,
    success: successDarkColors,
    critical: criticalDarkColors,
    white: whiteDarkColors,
    alpha: {
      white: alphaWhiteDarkColors,
      black: alphaBlackDarkColors
    }
  }
};
