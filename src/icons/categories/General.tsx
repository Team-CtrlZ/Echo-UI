import BarsArrowDown from '@/icons/general/BarkArrowDown';
import BarsArrowUp from '@/icons/general/BarkArrowUp';
import BookmarkFilled from '@/icons/general/BookmarkFilled';
import BookmarkLine from '@/icons/general/BookmarkLine';
import BookOpenFilled from '@/icons/general/BookOpenFilled';
import BookOpenLine from '@/icons/general/BookOpenLine';
import Copy from '@/icons/general/Copy';
import DotsHorizontal from '@/icons/general/DotsHorizontal';
import DotsVertical from '@/icons/general/DotsVertical';
import EyeFilled from '@/icons/general/EyeFilled';
import EyeLine from '@/icons/general/EyeLine';
import EyeOffFilled from '@/icons/general/EyeOffFilled';
import EyeOffLine from '@/icons/general/EyeOffLine';
import FilterFilled from '@/icons/general/FilterFilled';
import FilterLine from '@/icons/general/FilterLine';
import FunnelFilled from '@/icons/general/FunnelFilled';
import FunnelLine from '@/icons/general/FunnelLine';
import HomeFilled from '@/icons/general/HomeFilled';
import HomeLine from '@/icons/general/HomeLine';
import Pin from '@/icons/general/Pin';
import Search from '@/icons/general/Search';
import SearchThick from '@/icons/general/SearchThick';
import SettingFilled from '@/icons/general/SettingFilled';
import SettingLine from '@/icons/general/SettingLine';
import ShareFilled from '@/icons/general/ShareFilled';
import ShareLine from '@/icons/general/ShareLine';
import TrashFilled from '@/icons/general/TrashFilled';
import TrashLine from '@/icons/general/TrashLine';
import { Icon } from '@/icons/Icons.types';
import React from 'react';

const icons = {
  home: {
    filled: HomeFilled,
    line: HomeLine
  },
  dots: {
    vertical: DotsVertical,
    horizontal: DotsHorizontal
  },
  eye: {
    filled: EyeFilled,
    line: EyeLine
  },
  eyeOff: {
    filled: EyeOffFilled,
    line: EyeOffLine
  },
  search: {
    line: Search,
    thick: SearchThick
  },
  funnel: {
    filled: FunnelFilled,
    line: FunnelLine
  },
  trash: {
    filled: TrashFilled,
    line: TrashLine
  },
  copy: {
    line: Copy
  },
  setting: {
    line: SettingLine,
    filled: SettingFilled
  },
  pin: {
    line: Pin
  },
  bookmark: {
    line: BookmarkLine,
    filled: BookmarkFilled
  },
  filter: {
    line: FilterLine,
    filled: FilterFilled
  },
  share: {
    line: ShareLine,
    filled: ShareFilled
  },
  bookOpen: {
    line: BookOpenLine,
    filled: BookOpenFilled
  },
  barsArrow: {
    up: BarsArrowUp,
    down: BarsArrowDown
  }
};

type GeneralIconMap = typeof icons;
type GeneralIconName = keyof GeneralIconMap;

interface GeneralProps<N extends GeneralIconName> extends Icon {
  name: N;
  variant: keyof GeneralIconMap[N];
}

export const General = <N extends GeneralIconName>({
  name,
  variant,
  ...rest
}: GeneralProps<N>) => {
  const IconComponent = icons[name]?.[variant] as React.FC<Icon>;

  return IconComponent ? <IconComponent {...rest} /> : null;
};
