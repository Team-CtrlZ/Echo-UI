import styled from 'styled-components';

import { StyledTextareaProps } from '@/Input/Textarea/Textarea.types';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  min-width: 240px;
`;

export const Form = styled.div<StyledTextareaProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 6px;
`;

export const TextField = styled.div<StyledTextareaProps>`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  padding: 8px;
  height: ${({ $size }) =>
    $size === 'xsm' ? '72px' : $size === 'sm' ? '112px' : '128px'};

  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ $state, theme }) =>
    $state === 'error'
      ? theme.colors.semantic.light.critical.normal.default
      : theme.colors.theme.subBrand[200]};
  background: ${({ theme }) => theme.colors.components.light.bg.primary};

  overflow-y: auto;
  overflow-x: hidden;

  &:hover {
    background: ${({ theme }) => theme.colors.components.light.bg.input};
    border-width: ${({ $state }) => ($state === 'error' ? '1.5px' : '1px')};
    border-color: ${({ $state, theme }) =>
      $state === 'error'
        ? theme.colors.semantic.light.critical.normal.default
        : theme.colors.components.light.border.primary};
  }

  &:has(textarea:focus) {
    border-color: ${({ $state, theme }) =>
      $state === 'error'
        ? theme.colors.semantic.light.critical.normal.default
        : theme.colors.components.light.border.focusedRing};
    background: ${({ theme }) => theme.colors.components.light.bg.primary};
  }

  &:has(textarea:disabled) {
    border-color: ${({ theme }) => theme.colors.theme.subBrand[200]};
    background: ${({ theme }) => theme.colors.theme.subBrand[50]};
  }

  &:has(textarea:read-only) {
    border-color: ${({ $state, theme }) =>
      $state === 'error'
        ? theme.colors.semantic.light.critical.normal.default
        : theme.colors.theme.subBrand[200]};
    background: ${({ theme }) => theme.colors.components.light.bg.primary};
  }
`;

export const StyledTextarea = styled.textarea<StyledTextareaProps>`
  resize: none;
  flex: 1 0 0;
  height: auto;
  overflow: hidden;

  background: inherit;
  border: none;
  caret-color: ${({ theme }) =>
    theme.colors.semantic.light.primary.normal.default};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ $size, theme }) =>
    theme.typography.semantic.body[$size]!.fontSize};
  font-style: normal;
  font-weight: 400;
  line-height: ${({ $size, theme }) =>
    theme.typography.semantic.body[$size]!.lineHeight};
  color: ${({ $state, theme }) =>
    $state === 'error'
      ? theme.colors.components.light.text.critical
      : theme.colors.components.light.text.default};

  &::placeholder {
    color: ${({ theme }) => theme.colors.components.light.text.mute};
  }
  &:focus {
    outline: none;
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.components.light.text.disabled};
    cursor: not-allowed;
  }
`;
