import styled from 'styled-components';

import { PaddingValues, StyledButtonProps } from '@/Button/Button.types';
import { TypographyType } from '@/theme';

const padding: PaddingValues = {
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
  padding: ${(props) =>
    props.$isCompact ? 'none' : padding[props.$size][props.$paddingType]};
  gap: ${(props) =>
    props.$isCompact
      ? props.$size === 'sm'
        ? '4px'
        : props.$size === 'md'
          ? '6px'
          : '8px'
      : gap[props.$size]};
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
        return (theme.typography.components.button.md as TypographyType)
          .lineHeight;
      case 'lg':
      case 'xl':
        return (theme.typography.components.button.lg as TypographyType)
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
      case 'secondaryText':
        return theme.colors.semantic.light.secondary.dark.default;
      case 'neutralOutline':
        return theme.colors.tokens.neutral['900'];
    }
  }};

  border: ${({ $theme, theme }) =>
    $theme === 'neutralOutline'
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
      case 'secondaryText':
        return 'none';
      case 'neutralOutline':
        return theme.colors.semantic.light.white.default;
    }
  }};

  &:hover {
    color: ${({ $theme, $isCompact, theme }) => {
      if ($isCompact) return theme.colors.semantic.light.primary.normal.hover;
      switch ($theme) {
        case 'primary':
        case 'critical':
        default:
          return theme.colors.components.light.text.inverse;
        case 'secondary':
          return theme.colors.semantic.light.neutral.darker;
        case 'secondaryText':
          return theme.colors.semantic.light.secondary.dark.default;
        case 'neutralOutline':
          return theme.colors.tokens.neutral['900'];
      }
    }};
    border: ${({ $theme, theme }) =>
      $theme === 'neutralOutline'
        ? `1px solid ${theme.colors.theme.subBrand['200']}`
        : 'none'};
    background: ${({ $theme, $isCompact, theme }) => {
      if ($isCompact) return 'none';
      switch ($theme) {
        case 'primary':
        case 'critical':
        default:
          return theme.colors.semantic.light[$theme].normal.hover;
        case 'secondary':
        case 'secondaryText':
          return theme.colors.semantic.light.secondary.light.hover;
        case 'neutralOutline':
          return theme.colors.semantic.light.white.hover;
      }
    }};
  }

  &:active {
    border: ${({ $theme, theme }) =>
      $theme === 'neutralOutline'
        ? `1px solid ${theme.colors.theme.subBrand['300']}`
        : 'none'};
    background: ${({ $theme, $isCompact, theme }) => {
      if ($isCompact) return 'none';
      switch ($theme) {
        case 'primary':
        case 'critical':
        default:
          return theme.colors.semantic.light[$theme].normal.active;
        case 'secondary':
        case 'secondaryText':
          return theme.colors.semantic.light.secondary.light.active;
        case 'neutralOutline':
          return theme.colors.semantic.light.white.active;
      }
    }};
    color: ${({ $theme, $isCompact, theme }) => {
      if ($isCompact) return theme.colors.semantic.light.primary.normal.active;
      switch ($theme) {
        case 'primary':
        case 'critical':
        default:
          return theme.colors.components.light.text.inverse;
        case 'secondary':
          return theme.colors.semantic.light.neutral.darker;
        case 'secondaryText':
          return theme.colors.semantic.light.secondary.dark.default;
        case 'neutralOutline':
          return theme.colors.tokens.neutral['900'];
      }
    }};
  }
  &:disabled {
    cursor: not-allowed;
    background: ${({ $theme, theme }) =>
      $theme === 'secondaryText' ? 'none' : theme.colors.theme.subBrand['50']};
    color: ${({ theme }) => theme.colors.components.light.text.disabled};
    border: ${({ $theme, theme }) =>
      $theme === 'neutralOutline'
        ? `1px solid ${theme.colors.theme.subBrand['200']}`
        : 'none'};
  }
`;
