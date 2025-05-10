import { JSX } from 'react';

import { StyledButton } from '@/Button/Button.styles';
import { ButtonProps } from '@/Button/Button.types';
import { ThemeProvider } from '@/theme';

const Button = (props: ButtonProps): JSX.Element => {
  const { children, paddingType, size, theme, isCompact,...rest } = props;

  return (
    <>
      <ThemeProvider theme={{}}>
        <StyledButton $paddingType={paddingType} $size={size} $theme={theme} $isCompact={isCompact ?? false} {...rest}>
          {children}
        </StyledButton>
      </ThemeProvider>
    </>
  );
};

export default Button;
