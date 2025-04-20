import ArrowDown from '@/icons/arrow/ArrowDown';
import ArrowLeft from '@/icons/arrow/ArrowLeft';
import ArrowRight from '@/icons/arrow/ArrowRight';
import ArrowUp from '@/icons/arrow/ArrowUp';
import ArrowUpRight from '@/icons/arrow/ArrowUpRight';
import ChevronDoubleDown from '@/icons/arrow/ChevronDoubleDown';
import ChevronDoubleLeft from '@/icons/arrow/ChevronDoubleLeft';
import ChevronDoubleMiniDown from '@/icons/arrow/ChevronDoubleMiniDown';
import ChevronDoubleMiniLeft from '@/icons/arrow/ChevronDoubleMiniLeft';
import ChevronDoubleMiniRight from '@/icons/arrow/ChevronDoubleMiniRight';
import ChevronDoubleMiniUp from '@/icons/arrow/ChevronDoubleMiniUp';
import ChevronDoubleRight from '@/icons/arrow/ChevronDoubleRight';
import ChevronDoubleUp from '@/icons/arrow/ChevronDoubleUp';
import ChevronDown from '@/icons/arrow/ChevronDown';
import ChevronLeft from '@/icons/arrow/ChevronLeft';
import ChevronMiniDown from '@/icons/arrow/ChevronMiniDown';
import ChevronMiniLeft from '@/icons/arrow/ChevronMiniLeft';
import ChevronMiniRight from '@/icons/arrow/ChevronMiniRight';
import ChevronMiniUp from '@/icons/arrow/ChevronMiniUp';
import ChevronRight from '@/icons/arrow/ChevronRight';
import ChevronSelectorHorizontal from '@/icons/arrow/ChevronSelectorHorizontal';
import ChevronSelectorVertical from '@/icons/arrow/ChevronSelectorVertical';
import ChevronUp from '@/icons/arrow/ChevronUp';
import CornerDownRight from '@/icons/arrow/CornerDownRight';
import Download from '@/icons/arrow/Download';
import DownloadCloud from '@/icons/arrow/DownloadCloud';
import ExpandAllDirection from '@/icons/arrow/ExpandAllDirection';
import ExpandInner from '@/icons/arrow/ExpandInner';
import ExpandOuter from '@/icons/arrow/ExpandOuter';
import Logout from '@/icons/arrow/Logout';
import RefreshCW from '@/icons/arrow/RefreshCW';
import RefreshCWDouble from '@/icons/arrow/RefreshCWDouble';
import Share from '@/icons/arrow/Share';
import UploadCloudFilled from '@/icons/arrow/UploadCloudFilled';
import UploadCloudLine from '@/icons/arrow/UploadCloudLine';
import { Icon } from '@/icons/Icons.types';
import React from 'react';

const icons = {
  chevron: {
    down: ChevronDown,
    up: ChevronUp,
    left: ChevronLeft,
    right: ChevronRight
  },
  chevronMini: {
    down: ChevronMiniDown,
    up: ChevronMiniUp,
    left: ChevronMiniLeft,
    right: ChevronMiniRight
  },
  chevronDouble: {
    down: ChevronDoubleDown,
    up: ChevronDoubleUp,
    left: ChevronDoubleLeft,
    right: ChevronDoubleRight
  },
  chevronDoubleMini: {
    down: ChevronDoubleMiniDown,
    up: ChevronDoubleMiniUp,
    left: ChevronDoubleMiniLeft,
    right: ChevronDoubleMiniRight
  },
  arrow: {
    down: ArrowDown,
    up: ArrowUp,
    left: ArrowLeft,
    right: ArrowRight,
    upRight: ArrowUpRight
  },
  refreshCW: {
    line: RefreshCW
  },
  refreshCWDouble: {
    line: RefreshCWDouble
  },
  chevronSelector: {
    horizontal: ChevronSelectorHorizontal,
    vertical: ChevronSelectorVertical
  },
  cornerDownRight: {
    line: CornerDownRight
  },
  expand: {
    inner: ExpandInner,
    outer: ExpandOuter
  },
  expandAllDirection: {
    line: ExpandAllDirection
  },
  share: {
    line: Share
  },
  uploadCloud: {
    line: UploadCloudLine,
    filled: UploadCloudFilled
  },
  download: {
    line: Download
  },
  downloadCloud: {
    line: DownloadCloud
  },
  logout: {
    line: Logout
  }
};

type ArrowIconMap = typeof icons;
type ArrowIconName = keyof ArrowIconMap;

interface ArrowProps<N extends ArrowIconName> extends Icon {
  name: N;
  variant: keyof ArrowIconMap[N];
}

export const Arrow = <N extends ArrowIconName>({
  name,
  variant,
  ...rest
}: ArrowProps<N>) => {
  const IconComponent = icons[name]?.[variant] as React.FC<Icon>;

  return IconComponent ? <IconComponent {...rest} /> : null;
};
