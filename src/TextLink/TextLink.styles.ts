import styled from 'styled-components';

import { StyledTextLinkProps } from '@/TextLink/TextLink.types';

export const Container = styled.div<Pick<StyledTextLinkProps, '$theme'>>`
  display: flex;
  align-items: center;

  cursor: pointer;
  color: ${({ $theme, theme }) =>
    $theme === 'primary'
      ? theme.colors.semantic.light.primary.dark.default
      : theme.colors.semantic.light.secondary.darker};

  &:hover {
    color: ${({ $theme, theme }) =>
      $theme === 'primary'
        ? theme.colors.semantic.light.primary.dark.hover
        : theme.colors.semantic.light.secondary.normal.hover};
  }

  &:active {
    color: ${({ $theme, theme }) =>
      $theme === 'primary'
        ? theme.colors.semantic.light.primary.darker
        : theme.colors.semantic.light.secondary.normal.active};
  }
`;

export const StyledAnchor = styled.a<StyledTextLinkProps>`
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;

  color: inherit;
  font-weight: 600;
  font-style: normal;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ $size, theme }) =>
    $size === 'sm'
      ? theme.typography.components.label.xsm!.fontSize
      : $size === 'md'
        ? theme.typography.components.label.sm!.fontSize
        : theme.typography.components.label.md!.fontSize};
  line-height: ${({ $size, theme }) =>
    $size === 'sm'
      ? theme.typography.components.label.xsm!.lineHeight
      : $size === 'md'
        ? theme.typography.components.label.sm!.lineHeight
        : theme.typography.components.label.md!.lineHeight};

  &:hover {
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
  }
`;
