import React from 'react';

import { Icon } from '@/icons/Icons.types';
import Grabber from '@/icons/layout/Grabber';
import Grid from '@/icons/layout/Grid';
import LayoutRight from '@/icons/layout/LayoutRight';
import LayoutTop from '@/icons/layout/LayoutTop';
import List from '@/icons/layout/List';
import MenuCollapsed from '@/icons/layout/MenuCollapsed';
import MenuLine from '@/icons/layout/MenuLine';
import MenuMinimal from '@/icons/layout/MenuMinimal';
import Resize from '@/icons/layout/Resize';

const icons = {
  layout: {
    top: LayoutTop,
    right: LayoutRight
  },
  grid: {
    line: Grid
  },
  list: {
    line: List
  },
  resize: {
    line: Resize
  },
  menu: {
    line: MenuLine,
    collapsed: MenuCollapsed,
    minimal: MenuMinimal
  },
  grabber: {
    line: Grabber
  }
};

type LayoutIconMap = typeof icons;
type LayoutIconName = keyof LayoutIconMap;

interface LayoutProps<N extends LayoutIconName> extends Icon {
  name: N;
  variant: keyof LayoutIconMap[N];
}

export const Layout = <N extends LayoutIconName>({
  name,
  variant,
  ...rest
}: LayoutProps<N>) => {
  const IconComponent = icons[name]?.[variant] as React.FC<Icon>;

  return IconComponent ? <IconComponent {...rest} /> : null;
};
