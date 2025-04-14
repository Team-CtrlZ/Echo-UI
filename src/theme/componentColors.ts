import { semanticColors } from '@/theme/semanticColors';
import { themeColors } from '@/theme/ThemeColors';
import {
  BackgroundColors,
  BorderColors,
  ComponentColors,
  TextColors
} from './Theme.types';

const textLightColors: TextColors = {
  default: semanticColors.light.alpha.black['85'],
  active: semanticColors.light.alpha.black['95'],
  mute: semanticColors.light.alpha.black['45'],
  disabled: semanticColors.light.alpha.black['25'],
  brand: themeColors.brand['500'],
  brandPressed: themeColors.brand['700'],
  brandHover: themeColors.brand['600'],
  critical: themeColors.critical['600'],
  criticalBold: themeColors.critical['800'],
  info: themeColors.information['600'],
  infoBold: themeColors.information['800'],
  success: themeColors.success['600'],
  successBold: themeColors.success['800'],
  warning: themeColors.warning['600'],
  warningBold: themeColors.warning['800'],
  inverse: themeColors.base.white
};

const textDarkColors: TextColors = {
  default: semanticColors.dark.alpha.black['85'],
  active: semanticColors.dark.alpha.black['95'],
  mute: semanticColors.dark.alpha.black['45'],
  disabled: semanticColors.dark.alpha.black['25'],
  brand: themeColors.brand['500'],
  brandPressed: themeColors.brand['300'],
  brandHover: themeColors.brand['400'],
  critical: themeColors.critical['400'],
  criticalBold: themeColors.critical['50'],
  info: themeColors.information['400'],
  infoBold: themeColors.information['50'],
  success: themeColors.success['400'],
  successBold: themeColors.success['50'],
  warning: themeColors.warning['400'],
  warningBold: themeColors.warning['50'],
  inverse: themeColors.base.white
};

const bgLightColors: BackgroundColors = {
  primary: themeColors.base.white,
  secondary: themeColors.subBrand['50'],
  tertiary: themeColors.subBrand['100'],
  brand: themeColors.brand['500'],
  brandHover: themeColors.brand['600'],
  brandPressed: themeColors.brand['700'],
  dim: semanticColors.light.alpha.black['65'],
  disabled: themeColors.subBrand['200'],
  input: themeColors.subBrand['50'],
  toast: semanticColors.light.alpha.black['85'],
  tooltip: semanticColors.light.alpha.black['85']
};

const bgDarkColors: BackgroundColors = {
  primary: themeColors.subBrand['900'],
  secondary: themeColors.subBrand['800'],
  tertiary: themeColors.subBrand['700'],
  brand: themeColors.brand['500'],
  brandHover: themeColors.brand['400'],
  brandPressed: themeColors.brand['300'],
  dim: semanticColors.dark.alpha.black['65'],
  disabled: themeColors.subBrand['800'],
  input: themeColors.subBrand['800'],
  toast: semanticColors.dark.alpha.black['85'],
  tooltip: semanticColors.dark.alpha.black['85']
};

const borderLightColors: BorderColors = {
  primary: themeColors.neutral['400'],
  secondary: themeColors.neutral['300'],
  tertiary: themeColors.subBrand['200'],
  disabled: themeColors.subBrand['400'],
  focusedRing: themeColors.brand['600']
};

const borderDarkColors: BorderColors = {
  primary: themeColors.neutral['700'],
  secondary: themeColors.neutral['800'],
  tertiary: themeColors.subBrand['900'],
  disabled: themeColors.subBrand['700'],
  focusedRing: themeColors.brand['400']
};

export const componentColors: ComponentColors = {
  light: {
    text: textLightColors,
    bg: bgLightColors,
    border: borderLightColors
  },
  dark: {
    text: textDarkColors,
    bg: bgDarkColors,
    border: borderDarkColors
  }
};
