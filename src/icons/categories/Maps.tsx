import { Icon } from '@/icons/Icons.types';
import Mark from '@/icons/maps/Mark';
import MarkerPin from '@/icons/maps/MarkerPin';
import React from 'react';

const icons = {
  mark: {
    line: Mark
  },
  markerPin: {
    line: MarkerPin
  }
};

type MapsIconMap = typeof icons;
type MapsIconName = keyof MapsIconMap;

interface MapsProps<N extends MapsIconName> extends Icon {
  name: N;
  variant: keyof MapsIconMap[N];
}

export const Maps = <N extends MapsIconName>({
  name,
  variant,
  ...rest
}: MapsProps<N>) => {
  const IconComponent = icons[name]?.[variant] as React.FC<Icon>;

  return IconComponent ? <IconComponent {...rest} /> : null;
};
