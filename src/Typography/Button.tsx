import { JSX } from 'react';

import { useTheme } from 'styled-components';

import { ThemeProvider, TypographyType } from '@/theme';
import { StyledTypography } from '@/Typography/Typography.styles';
import { TypographyProps } from '@/Typography/Typography.types';

const Button = (props: TypographyProps): JSX.Element => {
  const { size, as, className, color, children } = props;

  const theme = useTheme();
  const style = theme.typography.components.button[size] as TypographyType;

  return (
    <ThemeProvider>
      <StyledTypography
        $fontSize={style.fontSize}
        $fontWeight={style.fontWeight}
        $lineHeight={style.lineHeight}
        as={as}
        color={color}
        className={className}
      >
        {children}
      </StyledTypography>
    </ThemeProvider>
  );
};

export default Button;
