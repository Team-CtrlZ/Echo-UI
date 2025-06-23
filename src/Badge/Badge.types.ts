import { HTMLAttributes } from 'react';

export type BadgeVariant = 'dot' | 'number' | 'text';
export type BadgeSize = 'lg' | 'md' | 'sm';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant: BadgeVariant;
  size: BadgeSize;
  outlined: boolean;
}

export interface StyledBadgeProps {
  $size: BadgeSize;
  $outlined: boolean;
}
