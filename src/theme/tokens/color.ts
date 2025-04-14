import { ColorScale, ColorTokens } from '@/theme';

const neutralTokens: ColorScale = {
  50: '#FBFBFB',
  100: '#F3F3F3',
  200: '#EEEEEE',
  300: '#E6E6E6',
  400: '#E1E1E1',
  500: '#D9D9D9',
  600: '#C5C5C5',
  700: '#9A9A9A',
  800: '#777777',
  900: '#5B5B5B',
  1000: '#4C4C4C'
};

const greyTokens: ColorScale = {
  25: '#FCFCFD',
  40: '#F6F7F8',
  50: '#F3F4F5',
  100: '#DADBE1',
  200: '#C9CAD2',
  300: '#B0B2BD',
  400: '#A1A3B1',
  500: '#898C9D',
  600: '#7D7F8F',
  700: '#61636F',
  800: '#4B4D56',
  900: '#3A3B42',
  1000: '#303137'
};

const violetTokens: ColorScale = {
  50: '#F0EFFD',
  100: '#D1CCF8',
  200: '#BBB4F4',
  300: '#9D92EF',
  400: '#897DEC',
  500: '#6C5CE7',
  600: '#6254D2',
  700: '#4D41A4',
  800: '#3B337F',
  900: '#2D2761',
  1000: '#262051'
};

const blueTokens: ColorScale = {
  50: '#E3EDFF',
  100: '#C3D5FF',
  200: '#A6C0FF',
  300: '#7DA3FE',
  400: '#6491FE',
  500: '#3D76FE',
  600: '#386BE7',
  700: '#2B54B4',
  800: '#22418C',
  900: '#1A326B',
  1000: '#152959'
};

const redTokens: ColorScale = {
  50: '#FCEFEF',
  100: '#F6CCCC',
  200: '#F2B3B3',
  300: '#EC9090',
  400: '#E87B7B',
  500: '#E25A5A',
  600: '#CE5252',
  700: '#A04040',
  800: '#7C3232',
  900: '#5F2626',
  1000: '#4F1F1F'
};

const tealTokens: ColorScale = {
  50: '#EEFBF8',
  100: '#C9F1E9',
  200: '#AFEADE',
  300: '#8AE1CF',
  400: '#74DBC6',
  500: '#51D2B8',
  600: '#4ABFA7',
  700: '#3A9583',
  800: '#2D7465',
  900: '#22584D',
  1000: '#1C4A40'
};

const yellowTokens: ColorScale = {
  50: '#FEFAF1',
  100: '#FDF0D4',
  200: '#FCE8BF',
  300: '#FADEA1',
  400: '#F9D88F',
  500: '#F8CE73',
  600: '#E2BB69',
  700: '#B09252',
  800: '#88713F',
  900: '#685730',
  1000: '#574828'
};

export const colorTokens: ColorTokens = {
  neutral: neutralTokens,
  grey: greyTokens,
  violet: violetTokens,
  blue: blueTokens,
  red: redTokens,
  teal: tealTokens,
  yellow: yellowTokens
};
