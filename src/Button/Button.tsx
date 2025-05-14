import { JSX } from 'react';

import { StyledButton } from '@/Button/Button.styles';
import { ButtonProps } from '@/Button/Button.types';

const Button = (props: ButtonProps): JSX.Element => {
  const { children, paddingType, size, theme, isCompact, ...rest } = props;

  return (
    <StyledButton
      $paddingType={paddingType}
      $size={size}
      $theme={theme}
      $isCompact={isCompact ?? false}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
