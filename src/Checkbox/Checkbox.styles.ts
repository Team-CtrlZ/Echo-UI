import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: none;
  cursor: pointer;
  border: none;

  &:focus-within,
  &:focus-visible,
  &:focus {
    outline: none;
    opacity: 1;
    border-radius: 4px;
    border: ${({ theme }) =>
      `1.5px solid ${theme.colors.components.light.border.focusedRing}`};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
