import {AnchorHTMLAttributes, JSX} from 'react';

import { SemanticColors } from '@/theme';

type TextLinkTheme = Extract<keyof SemanticColors, 'primary' | 'secondary'>;
type TextLinkSize = 'sm' | 'md' | 'lg';

export interface TextLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  theme: TextLinkTheme;
  size: TextLinkSize;
  text: string;
  isTrailingIcon: boolean;
  icon?: JSX.Element
}

export interface StyledTextLinkProps {
  $theme: TextLinkTheme;
  $size: TextLinkSize;
  $isTrailingIcon: boolean;
}
