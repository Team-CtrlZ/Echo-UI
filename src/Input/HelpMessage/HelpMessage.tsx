import { JSX } from 'react';

import { StyledHelpMessage } from '@/Input/HelpMessage/HelpMessage.styles';
import { HelpMessageProps } from '@/Input/HelpMessage/HelpMessage.types';

const HelpMessage = (props: HelpMessageProps): JSX.Element => {
  const { text, state } = props;

  return <StyledHelpMessage $state={state}>{text}</StyledHelpMessage>;
};

export default HelpMessage;
