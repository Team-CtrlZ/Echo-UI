import React from 'react';

import { Icon } from '@/icons/Icons.types';
import Lock from '@/icons/security/Lock';
import Unlocked from '@/icons/security/Unlocked';

const icons = {
  lock: {
    line: Lock
  },
  unlocked: {
    line: Unlocked
  }
};

type SecurityIconMap = typeof icons;
type SecurityIconName = keyof SecurityIconMap;

interface SecurityProps<N extends SecurityIconName> extends Icon {
  name: N;
  variant: keyof SecurityIconMap[N];
}

export const Security = <N extends SecurityIconName>({
  name,
  variant,
  ...rest
}: SecurityProps<N>) => {
  const IconComponent = icons[name]?.[variant] as React.FC<Icon>;

  return IconComponent ? <IconComponent {...rest} /> : null;
};
