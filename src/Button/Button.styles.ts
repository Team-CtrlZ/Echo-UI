import styled from 'styled-components';

import { StyledButtonProps } from '@/Button/Button.types';
import { TypographyType } from '@/theme';

const padding = {
  sm: {
    default: '8px 12px',
    loading: '8px 12px',
    iconOnly: '8px',
    iconBoth: '8px',
    iconLeft: '8px 12px 8px 8px',
    iconRight: '8px 8px 8px 12px'
  },
  md: {
    default: '10px 14px',
    loading: '10px 14px',
    iconOnly: '10px',
    iconBoth: '10px',
    iconLeft: '10px 14px 10px 10px',
    iconRight: '10px 10px 10px 14px'
  },
  lg: {
    default: '10px 16px',
    loading: '12px 16px',
    iconOnly: '12px',
    iconBoth: '10px 12px',
    iconLeft: '10px 16px 10px 12px',
    iconRight: '10px 12px 10px 16px'
  },
  xl: {
    default: '12px 24px',
    loading: '12px 24px',
    iconOnly: '12px',
    iconBoth: '12px 16px',
    iconLeft: '12px 24px 12px 16px',
    iconRight: '12px 16px 12px 24px'
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
  justify-content: center;
  align-items: center;
  padding: ${(props) => padding[props.$size][props.$paddingType]};
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

  border: ${({ $theme, theme }) =>
    $theme === 'white'
      ? `1px solid ${theme.colors.theme.subBrand['200']}`
      : 'none'};
  border-radius: 8px;
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
    border: ${({ $theme, theme }) =>
      $theme === 'white'
        ? `1px solid ${theme.colors.theme.subBrand['200']}`
        : 'none'};
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
    border: ${({ $theme, theme }) =>
      $theme === 'white'
        ? `1px solid ${theme.colors.theme.subBrand['300']}`
        : 'none'};
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
    border: ${({ $theme, theme }) =>
      $theme === 'white'
        ? `1px solid ${theme.colors.theme.subBrand['200']}`
        : 'none'};
  }
`;
