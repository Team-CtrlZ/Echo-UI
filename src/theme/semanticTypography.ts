import { SemanticTypography } from '@/theme/Theme.types';
import { fontSize, fontWeight, lineHeight } from '@/theme/tokens/typhography';

export const semanticTypography: SemanticTypography = {
  display: {
    xsm: {
      fontSize: fontSize['5xl'],
      fontWeight: fontWeight.bold,
      lineHeight: lineHeight['5xl']
    },
    sm: {
      fontSize: fontSize['7xl'],
      fontWeight: fontWeight.bold,
      lineHeight: lineHeight['7xl']
    },
    md: {
      fontSize: fontSize['8xl'],
      fontWeight: fontWeight.bold,
      lineHeight: lineHeight['8xl']
    },
    lg: {
      fontSize: fontSize['9xl'],
      fontWeight: fontWeight.bold,
      lineHeight: lineHeight['9xl']
    }
  },
  heading: {
    xsm: {
      fontSize: fontSize.xl,
      fontWeight: fontWeight.regular,
      lineHeight: lineHeight.xl
    },
    sm: {
      fontSize: fontSize['2xl'],
      fontWeight: fontWeight.regular,
      lineHeight: lineHeight['2xl']
    },
    md: {
      fontSize: fontSize['3xl'],
      fontWeight: fontWeight.regular,
      lineHeight: lineHeight['3xl']
    },
    lg: {
      fontSize: fontSize['4xl'],
      fontWeight: fontWeight.regular,
      lineHeight: lineHeight['4xl']
    },
    xl: {
      fontSize: fontSize['5xl'],
      fontWeight: fontWeight.regular,
      lineHeight: lineHeight['5xl']
    },
    '2xl': {
      fontSize: fontSize['6xl'],
      fontWeight: fontWeight.regular,
      lineHeight: lineHeight['7xl']
    }
  },
  body: {
    xsm: {
      fontSize: fontSize.xsm,
      fontWeight: fontWeight.regular,
      lineHeight: lineHeight.sm
    },
    sm: {
      fontSize: fontSize.sm,
      fontWeight: fontWeight.regular,
      lineHeight: lineHeight.sm
    },
    md: {
      fontSize: fontSize.md,
      fontWeight: fontWeight.regular,
      lineHeight: lineHeight.md
    },
    lg: {
      fontSize: fontSize.lg,
      fontWeight: fontWeight.regular,
      lineHeight: lineHeight.xl
    }
  }
};
