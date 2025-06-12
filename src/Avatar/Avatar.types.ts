import React, { HTMLAttributes } from 'react';

import { SemanticTypographyType, TypographySize } from '@/theme';

type AvatarSize = Extract<
  TypographySize,
  '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xsm'
>;

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  size: AvatarSize;
  color?: string;
  children?: string | React.ReactNode;
  isVisibleBadge?: boolean;
}

export interface StyledAvatarProps {
  $size: AvatarSize;
  $color?: string;
}

export type WidthByAvatarSize = {
  [size in AvatarSize]: string;
};

export type TypoByAvatarSize = {
  [size in AvatarSize]: {
    type: SemanticTypographyType;
    size: TypographySize;
  };
};
