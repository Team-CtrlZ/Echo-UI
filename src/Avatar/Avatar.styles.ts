import styled from 'styled-components';

import {
  StyledAvatarProps,
  TypoByAvatarSize,
  WidthByAvatarSize
} from '@/Avatar/Avatar.types';
import { TypographyType } from '@/theme';

const widthByAvatarSize: WidthByAvatarSize = {
  '2xl': '80px',
  xl: '64px',
  lg: '48px',
  md: '40px',
  sm: '32px',
  xsm: '24px'
};

const typoTypeByAvatarSize: TypoByAvatarSize = {
  '2xl': {
    type: 'heading',
    size: '2xl'
  },
  xl: {
    type: 'heading',
    size: 'lg'
  },
  lg: {
    type: 'heading',
    size: 'sm'
  },
  md: {
    type: 'heading',
    size: 'xsm'
  },
  sm: {
    type: 'body',
    size: 'md'
  },
  xsm: {
    type: 'body',
    size: 'xsm'
  }
};

export const Container = styled.div<StyledAvatarProps>`
  position: relative;
  width: ${({ $size }) => widthByAvatarSize[$size]};
  height: ${({ $size }) => widthByAvatarSize[$size]};
  flex-shrink: 0;

  border-radius: 100px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.components.light.border.tertiary};
  background: ${({ $color, theme }) =>
    $color || theme.colors.components.light.bg.brand};

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.components.light.text.inverse};
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 600;
  font-size: ${({ $size, theme }) =>
    (
      theme.typography.semantic[typoTypeByAvatarSize[$size].type][
        typoTypeByAvatarSize[$size].size
      ] as TypographyType
    ).fontSize};
  line-height: ${({ $size, theme }) =>
    (
      theme.typography.semantic[typoTypeByAvatarSize[$size].type][
        typoTypeByAvatarSize[$size].size
      ] as TypographyType
    ).lineHeight};
`;

export const BadgeContainer = styled.div`
  position: absolute;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100%;
  background: ${({ theme }) =>
    theme.colors.semantic.light.information.normal.default};
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
`;
