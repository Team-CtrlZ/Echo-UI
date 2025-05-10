type LabelSize = 'xsm' | 'sm' | 'md';

export interface LabelProps {
  text: string
  size: LabelSize
  isDisabled?: boolean
  isRequired?: boolean
  isVisibleHelpIcon?: boolean
  isVisibleCount?: boolean
  currentCount?: number
  maxCount?: number
}

export interface StyledLabelProps {
  $size: LabelSize
  $isDisabled: boolean
}