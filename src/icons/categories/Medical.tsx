import React from 'react';

import { Icon } from '@/icons/Icons.types';
import MedicalCircle from '@/icons/medical/MedicalCircle';
import MedicalSquare from '@/icons/medical/MedicalSquare';

const icons = {
  medicalCircle: {
    line: MedicalCircle
  },
  medicalSquare: {
    line: MedicalSquare
  }
};

type MedicalIconMap = typeof icons;
type MedicalIconName = keyof MedicalIconMap;

interface MedicalProps<N extends MedicalIconName> extends Icon {
  name: N;
  variant: keyof MedicalIconMap[N];
}

export const Medical = <N extends MedicalIconName>({
  name,
  variant,
  ...rest
}: MedicalProps<N>) => {
  const IconComponent = icons[name]?.[variant] as React.FC<Icon>;

  return IconComponent ? <IconComponent {...rest} /> : null;
};
