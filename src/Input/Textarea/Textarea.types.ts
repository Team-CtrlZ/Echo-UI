import { TextareaHTMLAttributes } from 'react';

import { LabelProps } from '@/Input/Label/Label.types';

type TextareaSize = 'xsm' | 'sm' | 'md';
type TextareaState = 'default' | 'error';

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    Pick<
      LabelProps,
      | 'isRequired'
      | 'isVisibleHelpIcon'
      | 'isVisibleCount'
      | 'maxCount'
      | 'currentCount'
    > {
  sizeType: TextareaSize;
  state: TextareaState;
  isVisibleLabel?: boolean;
  labelText?: string;
  isVisibleHelpMessage?: boolean;
  helpMessageText?: string;
}

export interface StyledTextareaProps {
  $size: TextareaSize,
  $state: TextareaState
}
