import React, { JSX } from 'react';

import { TypographySize } from '@/theme';

export type TypographySizeType = TypographySize;

export interface TypographyProps {
  size: TypographySizeType;
  fontWeight?: number;
  as?: keyof JSX.IntrinsicElements;
  color?: string;
  className?: string;
  children: React.ReactNode;
}

export interface StyledTypographyProps {
  $fontSize: string;
  $fontWeight: number;
  $lineHeight: string;
  $color?: string;
}
