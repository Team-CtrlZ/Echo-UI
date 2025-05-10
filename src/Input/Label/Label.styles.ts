import styled from 'styled-components';

import { StyledLabelProps } from '@/Input/Label/Label.types';

export const Container = styled.div<Pick<StyledLabelProps, '$isDisabled'>>`
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: ${({ $isDisabled }) => ($isDisabled ? 0.65 : 1)};
`;

export const LabelContent = styled.div<Pick<StyledLabelProps, '$size'>>`
  display: flex;
  align-items: center;
  gap: 2px;
  flex: 1 0 0;
  color: ${({ theme }) => theme.colors.components.light.text.active};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ $size, theme }) =>
    theme.typography.components.label[$size]!.fontSize};
  font-style: normal;
  font-weight: 500;
  line-height: ${({ $size, theme }) =>
    theme.typography.components.label[$size]!.lineHeight};
`;

export const Required = styled.span<Pick<StyledLabelProps, '$size'>>`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ $size, theme }) =>
    theme.typography.components.label[$size === 'md' ? 'sm' : 'xsm']!.fontSize};
  font-style: normal;
  font-weight: 500;
  line-height: ${({ $size, theme }) =>
    theme.typography.components.label[$size === 'md' ? 'sm' : 'xsm']!
      .lineHeight};

  color: ${({ theme }) => theme.colors.components.light.text.critical};
  text-align: center;
`;

export const EmptyHelpIcon = styled.div`
  width: 16px;
  height: 16px;
`;

export const CountContent = styled.div<Pick<StyledLabelProps, '$size'>>`
  color: ${({ theme }) => theme.colors.components.light.text.default};
  text-align: right;

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ $size, theme }) =>
    theme.typography.components.label[$size === 'md' ? 'sm' : 'xsm']!.fontSize};
  font-style: normal;
  font-weight: 400;
  line-height: ${({ $size, theme }) =>
    theme.typography.components.label[$size]!.lineHeight};
`;
