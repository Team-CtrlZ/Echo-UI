import styled from 'styled-components';

export const StyledRadio = styled.button`
  display: flex;
  width: 16px;
  height: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  background: ${({ theme }) => theme.colors.components.light.bg.primary};
  border: none;

  &:focus-within,
  &:focus-visible,
  &:focus {
    border-radius: 100%;
    border: ${({ theme }) =>
      `1.5px solid ${theme.colors.components.light.border.focusedRing}`};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
