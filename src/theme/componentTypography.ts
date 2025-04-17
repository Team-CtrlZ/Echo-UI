import { ComponentTypography } from '@/theme/Theme.types';
import { fontSize, fontWeight, lineHeight } from '@/theme/tokens/typhography';

export const componentTypography: ComponentTypography = {
  label: {
    xsm: {
      fontSize: fontSize.xsm,
      fontWeight: fontWeight.regular,
      lineHeight: lineHeight.xsm
    },
    sm: {
      fontSize: fontSize.sm,
      fontWeight: fontWeight.regular,
      lineHeight: lineHeight.xsm
    },
    md: {
      fontSize: fontSize.md,
      fontWeight: fontWeight.regular,
      lineHeight: lineHeight.sm
    },
    lg: {
      fontSize: fontSize.lg,
      fontWeight: fontWeight.regular,
      lineHeight: lineHeight.md
    }
  },
  button: {
    sm: {
      fontSize: fontSize.sm,
      fontWeight: fontWeight.semibold,
      lineHeight: lineHeight.xsm
    },
    md: {
      fontSize: fontSize.sm,
      fontWeight: fontWeight.semibold,
      lineHeight: lineHeight.sm
    },
    lg: {
      fontSize: fontSize.md,
      fontWeight: fontWeight.semibold,
      lineHeight: lineHeight.md
    }
  }
};
