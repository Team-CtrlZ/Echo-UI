import React from 'react';

import { Icon } from '@/icons/Icons.types';
import CalendarFilled from '@/icons/time/CalendarFilled';
import CalendarLine from '@/icons/time/CalendarLine';
import CalendarPlus from '@/icons/time/CalendarPlus';
import ClockFilled from '@/icons/time/ClockFilled';
import ClockLine from '@/icons/time/ClockLine';

const icons = {
  clock: {
    line: ClockLine,
    filled: ClockFilled
  },
  calendar: {
    line: CalendarLine,
    filled: CalendarFilled
  },
  calendarPlus: {
    line: CalendarPlus
  }
};

type TimeIconMap = typeof icons;
type TimeIconName = keyof TimeIconMap;

interface TimeProps<N extends TimeIconName> extends Icon {
  name: N;
  variant: keyof TimeIconMap[N];
}

export const Time = <N extends TimeIconName>({
  name,
  variant,
  ...rest
}: TimeProps<N>) => {
  const IconComponent = icons[name]?.[variant] as React.FC<Icon>;

  return IconComponent ? <IconComponent {...rest} /> : null;
};
