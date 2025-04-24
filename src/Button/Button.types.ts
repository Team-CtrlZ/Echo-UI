import React, { ButtonHTMLAttributes } from 'react';

import { SemanticColors } from '@/theme';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
export type ButtonTheme = Extract<
  keyof SemanticColors,
  'primary' | 'secondary' | 'white' | 'critical'
>;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isIconOnly: boolean;
  size: ButtonSize;
  theme: ButtonTheme;
}

export interface StyledButtonProps {
  $isIconOnly: boolean;
  $size: ButtonSize;
  $theme: ButtonTheme;
}
