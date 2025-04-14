import { ColorScale, ThemeColors } from '@/theme/Theme.types';
import { colorTokens } from '@/theme/tokens/color';

const brandColors: ColorScale = {
  50: colorTokens.teal['50'],
  100: colorTokens.teal['100'],
  200: colorTokens.teal['200'],
  300: colorTokens.teal['300'],
  400: colorTokens.teal['400'],
  500: colorTokens.teal['500'],
  600: colorTokens.teal['600'],
  700: colorTokens.teal['700'],
  800: colorTokens.teal['800'],
  900: colorTokens.teal['900'],
  1000: colorTokens.teal['1000']
};

const subBrandColors: ColorScale = {
  25: colorTokens.grey['25'],
  40: colorTokens.grey['40'],
  50: colorTokens.grey['50'],
  100: colorTokens.grey['100'],
  200: colorTokens.grey['200'],
  300: colorTokens.grey['300'],
  400: colorTokens.grey['400'],
  500: colorTokens.grey['500'],
  600: colorTokens.grey['600'],
  700: colorTokens.grey['700'],
  800: colorTokens.grey['800'],
  900: colorTokens.grey['900'],
  1000: colorTokens.grey['1000']
};

const neutralColors: ColorScale = {
  50: colorTokens.neutral['50'],
  100: colorTokens.neutral['100'],
  200: colorTokens.neutral['200'],
  300: colorTokens.neutral['300'],
  400: colorTokens.neutral['400'],
  500: colorTokens.neutral['500'],
  600: colorTokens.neutral['600'],
  700: colorTokens.neutral['700'],
  800: colorTokens.neutral['800'],
  900: colorTokens.neutral['900'],
  1000: colorTokens.neutral['1000']
};

const criticalColors: ColorScale = {
  50: colorTokens.red['50'],
  100: colorTokens.red['100'],
  200: colorTokens.red['200'],
  300: colorTokens.red['300'],
  400: colorTokens.red['400'],
  500: colorTokens.red['500'],
  600: colorTokens.red['600'],
  700: colorTokens.red['700'],
  800: colorTokens.red['800'],
  900: colorTokens.red['900'],
  1000: colorTokens.red['1000']
};

const informationColors: ColorScale = {
  50: colorTokens.blue['50'],
  100: colorTokens.blue['100'],
  200: colorTokens.blue['200'],
  300: colorTokens.blue['300'],
  400: colorTokens.blue['400'],
  500: colorTokens.blue['500'],
  600: colorTokens.blue['600'],
  700: colorTokens.blue['700'],
  800: colorTokens.blue['800'],
  900: colorTokens.blue['900'],
  1000: colorTokens.blue['1000']
};

const successColors: ColorScale = {
  50: colorTokens.teal['50'],
  100: colorTokens.teal['100'],
  200: colorTokens.teal['200'],
  300: colorTokens.teal['300'],
  400: colorTokens.teal['400'],
  500: colorTokens.teal['500'],
  600: colorTokens.teal['600'],
  700: colorTokens.teal['700'],
  800: colorTokens.teal['800'],
  900: colorTokens.teal['900'],
  1000: colorTokens.teal['1000']
};

const warningColors: ColorScale = {
  50: colorTokens.yellow['50'],
  100: colorTokens.yellow['100'],
  200: colorTokens.yellow['200'],
  300: colorTokens.yellow['300'],
  400: colorTokens.yellow['400'],
  500: colorTokens.yellow['500'],
  600: colorTokens.yellow['600'],
  700: colorTokens.yellow['700'],
  800: colorTokens.yellow['800'],
  900: colorTokens.yellow['900'],
  1000: colorTokens.yellow['1000']
};

export const themeColors: ThemeColors = {
  brand: brandColors,
  subBrand: subBrandColors,
  neutral: neutralColors,
  critical: criticalColors,
  information: informationColors,
  success: successColors,
  warning: warningColors,
  base: {
    black: '#000000',
    white: '#FFFFFF'
  }
};
