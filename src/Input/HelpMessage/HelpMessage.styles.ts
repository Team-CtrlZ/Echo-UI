import styled from 'styled-components';

import { StyledHelpMessageProps } from '@/Input/HelpMessage/HelpMessage.types';

export const StyledHelpMessage = styled.p<StyledHelpMessageProps>`
  color: ${({ $state, theme }) => {
    switch ($state) {
      case 'error':
        return theme.colors.components.light.text.critical;
      case 'disabled':
        return theme.colors.components.light.text.disabled;
      case 'default':
      default:
        return theme.colors.components.light.text.active;
    }
  }};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.typography.semantic.body.sm!.fontSize};
  font-style: normal;
  font-weight: 400;
  line-height: ${({ theme }) => theme.typography.semantic.body.sm!.lineHeight};
`;
