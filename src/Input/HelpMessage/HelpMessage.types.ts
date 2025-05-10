type HelpMessageStateType = 'default' | 'error' | 'disabled';

export interface HelpMessageProps {
  text: string;
  state: HelpMessageStateType;
}

export interface StyledHelpMessageProps {
  $state: HelpMessageStateType;
}
