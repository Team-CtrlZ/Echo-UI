import styled from 'styled-components';

import { StyledBadgeProps } from '@/Badge/Badge.types';

const BadgeSizes = {
  lg: {
    dot: '10px',
    number: '',
    text: ''
  },
  md: {
    dot: '8px',
    number: '44px',
    text: ''
  },
  sm: {
    dot: '6px',
    number: '40px',
    text: ''
  }
};

const BadgePadding = {
  lg: {
    dot: '',
    number: '',
    text: ''
  },
  md: {
    dot: '',
    number: '2px 6px',
    text: '2px 5.5px'
  },
  sm: {
    dot: '',
    number: '0px 4px',
    text: '0px 3.5px'
  }
};

export const Container = styled.div<Pick<StyledBadgeProps, '$variant'>>`
  position: ${({ $variant }) => ($variant === 'text' ? 'static' : 'absolute')};
  right: ${({ $variant }) => ($variant === 'text' ? '' : 0)};
  top: ${({ $variant }) => ($variant === 'text' ? '' : 0)};
  transform: ${({ $variant }) =>
    $variant === 'text' ? '' : 'translate(50%, -50%)'};

  width: fit-content;
  height: fit-content;

  color: ${({ theme }) => theme.colors.components.light.text.inverse};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.typography.components.label.xsm!.fontSize};
  font-style: normal;
  font-weight: 600;
  line-height: ${({ theme }) =>
    theme.typography.components.label.xsm!.lineHeight};
`;

export const BadgeDot = styled.span<Omit<StyledBadgeProps, '$variant'>>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 100%;
  background: ${({ theme }) =>
    theme.colors.semantic.light.information.normal.default};

  width: ${({ $size }) => BadgeSizes[$size].dot};
  height: ${({ $size }) => BadgeSizes[$size].dot};
  border: ${({ theme, $size, $outlined }) =>
    $outlined
      ? `${$size === 'sm' ? 1 : 2}px solid ${theme.colors.semantic.light.white.default}`
      : 'none'};
`;

export const BadgeNumber = styled.span<Omit<StyledBadgeProps, '$variant'>>`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  text-align: center;
  border-radius: 20px;
  background: ${({ theme }) =>
    theme.colors.semantic.light.information.normal.default};

  border: ${({ theme, $outlined }) =>
    $outlined
      ? `2px solid ${theme.colors.semantic.light.white.default}`
      : 'none'};
  max-width: ${({ $size }) => BadgeSizes[$size].number};
  padding: ${({ $size }) => BadgePadding[$size].number};
`;

export const BadgeText = styled.span<Omit<StyledBadgeProps, '$variant'>>`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 20px;
  background: ${({ theme }) =>
    theme.colors.semantic.light.information.normal.default};

  padding: ${({ $size }) => BadgePadding[$size].number};
  border: ${({ theme, $outlined }) =>
    $outlined
      ? `2px solid ${theme.colors.semantic.light.white.default}`
      : 'none'};
`;
