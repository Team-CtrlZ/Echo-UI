import styled from 'styled-components';

import { StyledTypographyProps } from '@/Typography/Typography.types';

export const StyledTypography = styled.span<StyledTypographyProps>`
  font-size: ${(props) => props.$fontSize};
  font-weight: ${(props) => props.$fontWeight};
  line-height: ${(props) => props.$lineHeight};
  color: ${(props) => props.$color || 'inherit'};
`;
