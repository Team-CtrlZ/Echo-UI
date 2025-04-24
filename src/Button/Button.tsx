import { JSX } from 'react';

import { StyledButton } from '@/Button/Button.styles';
import { ButtonProps } from '@/Button/Button.types';
import { ThemeProvider } from '@/theme';

const Button = (props: ButtonProps): JSX.Element => {
  const { children, isIconOnly, size, theme,...rest } = props;

  return (
    <>
      <ThemeProvider theme={{}}>
        <StyledButton $isIconOnly={isIconOnly} $size={size} $theme={theme} {...rest}>
          {children}
        </StyledButton>
      </ThemeProvider>
    </>
  );
};

export default Button;
