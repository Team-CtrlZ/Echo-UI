import React, { ButtonHTMLAttributes } from 'react';

import { SemanticColors } from '@/theme';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
export type ButtonTheme =
  | Extract<keyof SemanticColors, 'primary' | 'secondary' | 'critical'>
  | 'secondaryText'
  | 'neutralOutline';
export type PaddingType =
  | 'default'
  | 'iconOnly'
  | 'iconLeft'
  | 'iconRight'
  | 'iconBoth'
  | 'loading';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  paddingType: PaddingType;
  size: ButtonSize;
  theme: ButtonTheme;
  isCompact?: boolean
}

export interface StyledButtonProps {
  $paddingType: PaddingType;
  $size: ButtonSize;
  $theme: ButtonTheme;
  $isCompact: boolean
}

export type PaddingValues = {
  [size in ButtonSize]: {
    [type in PaddingType]: string;
  };
};
