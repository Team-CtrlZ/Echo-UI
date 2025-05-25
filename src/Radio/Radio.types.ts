import { ButtonHTMLAttributes } from 'react';

type RadioState = 'default' | 'critical';
export type RadioButtonState = RadioState | 'hover' | 'pressed' | 'focused';

export interface RadioProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  state: RadioState;
  isSelected: boolean;
}

export interface RadioStateProps {
  state: RadioButtonState | 'disabled';
}
