import styled from 'styled-components';

import { StyledInputProps } from '@/Input/Input/Input.types';

const textFieldHeightValues = {
  xsm: '28px',
  sm: '36px',
  md: '40px',
  lg: '44px'
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  align-self: stretch;
`;

export const TextField = styled.div<StyledInputProps>`
  display: flex;
  height: ${({ $size }) => textFieldHeightValues[$size]};
  padding: ${({ $size }) => ($size === 'xsm' ? '0px 8px' : '8px')};
  align-items: center;
  align-self: stretch;

  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ $state, theme }) =>
    $state === 'error'
      ? theme.colors.semantic.light.critical.normal.default
      : theme.colors.theme.subBrand[200]};

  background: ${({ theme }) => theme.colors.components.light.bg.primary};
  color: ${({ $state, theme }) =>
    $state === 'default'
      ? theme.colors.components.light.text.default
      : theme.colors.components.light.text.critical};

  &:read-only {
    border-color: ${({ $state, theme }) =>
      $state === 'error'
        ? theme.colors.semantic.light.critical.normal.default
        : theme.colors.theme.subBrand[200]};
    background: ${({ theme }) => theme.colors.components.light.bg.primary};
    &:hover {
      border-width: ${({ $state }) => ($state === 'error' ? '1.5px' : '1px')};
      background: ${({ theme }) => theme.colors.components.light.bg.input};
    }
    &:has(input:focus) {
      border-color: ${({ $state, theme }) =>
        $state === 'error'
          ? theme.colors.semantic.light.critical.normal.default
          : theme.colors.components.light.border.focusedRing};
      background: ${({ theme }) => theme.colors.components.light.bg.primary};
    }
  }

  &:hover {
    background: ${({ theme }) => theme.colors.components.light.bg.input};
    border-width: ${({ $state }) => ($state === 'error' ? '1.5px' : '1px')};
    border-color: ${({ $state, theme }) =>
      $state === 'error'
        ? theme.colors.semantic.light.critical.normal.default
        : theme.colors.components.light.border.primary};
  }

  &:has(input:focus) {
    border-color: ${({ $state, theme }) =>
      $state === 'error'
        ? theme.colors.semantic.light.critical.normal.default
        : theme.colors.components.light.border.focusedRing};
    background: ${({ theme }) => theme.colors.components.light.bg.primary};
  }

  &:has(input:disabled) {
    cursor: not-allowed;
    background: ${({ theme }) => theme.colors.theme.subBrand[50]};
    color: ${({ theme }) => theme.colors.components.light.text.disabled};
  }
  &:has(input::placeholder) {
    color: ${({ theme }) => theme.colors.components.light.text.mute};
  }
`;

export const LeadingIcon = styled.div`
  display: flex;
  padding-left: 4px;
  justify-content: center;
  align-items: center;
`;

export const TrailingIcon = styled(LeadingIcon)`
  padding: 0 4px 0 8px;
`;

export const StyledInput = styled.input<StyledInputProps>`
  display: flex;
  height: ${({ $size }) =>
    $size === 'xsm' || $size === 'sm' ? '20px' : '24px'};
  align-items: center;
  gap: 2px;
  flex: 1 0 0;

  border: none;
  color: inherit;
  caret-color: ${({ theme }) =>
    theme.colors.semantic.light.primary.normal.default};
  background: inherit;

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ $size, theme }) =>
    $size === 'lg'
      ? theme.typography.semantic.body.md!.fontSize
      : theme.typography.semantic.body[$size]!.fontSize};
  font-weight: 400;
  line-height: ${({ $size, theme }) =>
    $size === 'lg'
      ? theme.typography.semantic.body.md!.lineHeight
      : theme.typography.semantic.body[$size]!.lineHeight};

  &:disabled {
    cursor: not-allowed;
  }

  &:focus {
    border: none;
    outline: none;
  }

  &::placeholder {
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ $size, theme }) =>
      $size === 'lg'
        ? theme.typography.semantic.body.md!.fontSize
        : theme.typography.semantic.body[$size]!.fontSize};
    font-weight: 400;
    line-height: ${({ $size, theme }) =>
      $size === 'lg'
        ? theme.typography.semantic.body.md!.lineHeight
        : theme.typography.semantic.body[$size]!.lineHeight};

    color: ${({ theme }) => theme.colors.components.light.text.mute};
  }
`;
