import { ButtonHTMLAttributes } from 'react';

type CheckboxState = 'default' | 'critical';
export type CheckboxUiState = CheckboxState | 'hover' | 'pressed' | 'focused';
type CheckboxStatus =
  | 'unselected'
  | 'selected'
  | 'intermediate'
  | 'preselected';

export interface CheckboxProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  state: CheckboxState;
  status: CheckboxStatus;
}

export interface CheckboxStateProps {
  state: CheckboxUiState | 'disabled';
}
