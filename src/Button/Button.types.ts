import React, { ButtonHTMLAttributes } from 'react';

import { SemanticColors } from '@/theme';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
export type ButtonTheme = Extract<
  keyof SemanticColors,
  'primary' | 'secondary' | 'white' | 'critical'
>;
export type PaddingType ='default' | 'iconOnly' | 'iconLeft' | 'iconRight' | 'iconBoth' | 'loading';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  paddingType: PaddingType;
  size: ButtonSize;
  theme: ButtonTheme;
}

export interface StyledButtonProps {
  $paddingType: PaddingType;
  $size: ButtonSize;
  $theme: ButtonTheme;
}
