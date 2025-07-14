import React, { HTMLAttributes } from 'react';

export type BadgeVariant = 'dot' | 'number' | 'text';
export type BadgeSize = 'lg' | 'md' | 'sm';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant: BadgeVariant;
  size: BadgeSize;
  outlined?: boolean;
  children?: React.ReactNode | string;
}

export interface StyledBadgeProps {
  $size: BadgeSize;
  $outlined: boolean;
  $variant: BadgeVariant
}
