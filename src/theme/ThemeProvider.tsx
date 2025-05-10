import React from 'react';

import { ThemeProvider as StyledProvider } from 'styled-components';

import { defaultTheme } from './defaultTheme';
import { GlobalStyle } from './GlobalStyle';
import { Theme } from './Theme.types';

import { deepMerge } from '@/utils/merge';

interface ThemeProviderProps {
  children: React.ReactNode;
  theme: Partial<Theme>;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme = {}
}) => {
   
  const mergedTheme= deepMerge(defaultTheme, theme);
   
  return (
    <StyledProvider theme={mergedTheme}>
      <GlobalStyle fontFamily={mergedTheme.fontFamily} />
      {children}
    </StyledProvider>
  );
};
