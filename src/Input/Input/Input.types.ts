import React, { InputHTMLAttributes } from 'react';

import { LabelProps } from '@/Input/Label/Label.types';

type InputSize = 'xsm' | 'sm' | 'md' | 'lg';
type InputState = 'default' | 'error'

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    Pick<LabelProps, 'isRequired' | 'isVisibleHelpIcon'> {
  sizeType: InputSize;
  state?: InputState
  isVisibleLabel?: boolean;
  labelText?: string;
  isVisibleHelpMessage?: boolean;
  helpMessageText?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export interface StyledInputProps {
  $size: InputSize;
  $state: InputState;
}
