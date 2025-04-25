import { JSX } from 'react';

import { Container, StyledAnchor } from '@/TextLink/TextLink.styles';
import { TextLinkProps } from '@/TextLink/TextLink.types';
import { ThemeProvider } from '@/theme';

const TextLink = (props: TextLinkProps): JSX.Element => {
  const { theme, size, text, isTrailingIcon, icon, ...rest } = props;

  return (
    <ThemeProvider theme={{}}>
      <Container $theme={theme}>
        <StyledAnchor
          $theme={theme}
          $size={size}
          $isTrailingIcon={isTrailingIcon}
          {...rest}
        >
          {text}
        </StyledAnchor>
        {isTrailingIcon && !!icon && icon}
      </Container>
    </ThemeProvider>
  );
};

export default TextLink;
