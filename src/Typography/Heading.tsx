import { JSX } from 'react';

import { useTheme } from 'styled-components';

import { TypographyType } from '@/theme';
import { StyledTypography } from '@/Typography/Typography.styles';
import { TypographyProps } from '@/Typography/Typography.types';

const Heading = (props: TypographyProps): JSX.Element => {
  const { size, fontWeight, as, className, color, children } = props;

  const theme = useTheme();
  const style = theme.typography.semantic.heading[size] as TypographyType;

  return (
    <StyledTypography
      $fontSize={style.fontSize}
      $fontWeight={fontWeight || style.fontWeight}
      $lineHeight={style.lineHeight}
      as={as}
      color={color}
      className={className}
    >
      {children}
    </StyledTypography>
  );
};

export default Heading;
