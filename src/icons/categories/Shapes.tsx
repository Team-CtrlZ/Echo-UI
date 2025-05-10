import React from 'react';

import { Icon } from '@/icons/Icons.types';
import CrownFilled from '@/icons/shapes/CrownFilled';
import CrownLine from '@/icons/shapes/CrownLine';
import GroupShareLight from '@/icons/shapes/GroupShareLight';
import HeartFilled from '@/icons/shapes/HeartFilled';
import HeartLine from '@/icons/shapes/HeartLine';
import Stars from '@/icons/shapes/Stars';

const icons = {
  heart: {
    line: HeartLine,
    filled: HeartFilled
  },
  stars: {
    line: Stars
  },
  groupShareLight: {
    line: GroupShareLight
  },
  crown: {
    line: CrownLine,
    filled: CrownFilled
  }
};

type ShapesIconMap = typeof icons;
type ShapesIconName = keyof ShapesIconMap;

interface ShapesProps<N extends ShapesIconName> extends Icon {
  name: N;
  variant: keyof ShapesIconMap[N];
}

export const Shapes = <N extends ShapesIconName>({
  name,
  variant,
  ...rest
}: ShapesProps<N>) => {
  const IconComponent = icons[name]?.[variant] as React.FC<Icon>;

  return IconComponent ? <IconComponent {...rest} /> : null;
};
