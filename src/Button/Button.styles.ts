import styled from 'styled-components';

import { StyledButtonProps } from '@/Button/Button.types';
import { TypographyType } from '@/theme';

const padding = {
  sm: {
    default: '8px 12px',
    iconOnly: '8px'
  },
  md: {
    default: '10px 14px',
    iconOnly: '10px'
  },
  lg: {
    default: '10px 16px',
    iconOnly: '10px'
  },
  xl: {
    default: '12px 24px',
    iconOnly: '12px'
  }
};

const gap = {
  sm: '4px',
  md: '6px',
  lg: '8px',
  xl: '8px'
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(props) =>
    padding[props.$size][props.$isIconOnly ? 'iconOnly' : 'default']};
  gap: ${(props) => gap[props.$size]};
  cursor: pointer;

  text-align: center;
  font-style: normal;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ $size, theme }) => {
    switch ($size) {
      case 'sm':
        return (theme.typography.components.button.sm as TypographyType)
          .fontSize;
      case 'md':
      default:
        return (theme.typography.components.button.md as TypographyType)
          .fontSize;
      case 'lg':
      case 'xl':
        return (theme.typography.components.button.lg as TypographyType)
          .fontSize;
    }
  }};
  line-height: ${({ $size, theme }) => {
    switch ($size) {
      case 'sm':
        return (theme.typography.components.button.sm as TypographyType)
          .lineHeight;
      case 'md':
      default:
        return (theme.typography.components.button.sm as TypographyType)
          .lineHeight;
      case 'lg':
      case 'xl':
        return (theme.typography.components.button.md as TypographyType)
          .lineHeight;
    }
  }};
  font-weight: ${({ $size, theme }) => {
    switch ($size) {
      case 'sm':
      case 'md':
      case 'lg':
      case 'xl':
      default:
        return (theme.typography.components.button.md as TypographyType)
          .fontWeight;
    }
  }};
  color: ${({ $theme, theme }) => {
    switch ($theme) {
      case 'primary':
      case 'critical':
      default:
        return theme.colors.components.light.text.inverse;
      case 'secondary':
        return theme.colors.semantic.light.neutral.darker;
      case 'white':
        return theme.colors.tokens.neutral['900'];
    }
  }};

  border-radius: 8px;
  border: none;
  background: ${({ $theme, theme }) => {
    switch ($theme) {
      case 'primary':
      case 'critical':
      default:
        return theme.colors.semantic.light[$theme].normal.default;
      case 'secondary':
        return theme.colors.semantic.light[$theme].light.default;
      case 'white':
        return theme.colors.semantic.light[$theme].default;
    }
  }};

  &:hover {
    background: ${({ $theme, theme }) => {
      switch ($theme) {
        case 'primary':
        case 'critical':
        default:
          return theme.colors.semantic.light[$theme].normal.hover;
        case 'secondary':
          return theme.colors.semantic.light[$theme].light.hover;
        case 'white':
          return theme.colors.semantic.light[$theme].hover;
      }
    }};
  }
  &:active {
    background: ${({ $theme, theme }) => {
      switch ($theme) {
        case 'primary':
        case 'critical':
        default:
          return theme.colors.semantic.light[$theme].normal.active;
        case 'secondary':
          return theme.colors.semantic.light[$theme].light.active;
        case 'white':
          return theme.colors.semantic.light[$theme].active;
      }
    }};
  }
  &:disabled {
    cursor: not-allowed;
    background: ${({ theme }) => theme.colors.theme.subBrand['50']};
    color: ${({ theme }) => theme.colors.components.light.text.disabled};
  }
`;
