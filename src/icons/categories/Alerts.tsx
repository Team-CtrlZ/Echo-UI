import React from 'react';

import AlertCircleFilled from '@/icons/alerts/AlertCircleFilled';
import AlertCircleLine from '@/icons/alerts/AlertCircleLine';
import AlertTriangleFilled from '@/icons/alerts/AlertTriangleFilled';
import AlertTriangleLine from '@/icons/alerts/AlertTriangleLine';
import AnnouncementFilled from '@/icons/alerts/AnnouncementFilled';
import AnnouncementLine from '@/icons/alerts/AnnouncementLine';
import BellOffFilled from '@/icons/alerts/BellOffFilled';
import BellOffLine from '@/icons/alerts/BellOffLine';
import BellRingingFilled from '@/icons/alerts/BellRingingFilled';
import BellRingingLine from '@/icons/alerts/BellRingingLine';
import Check from '@/icons/alerts/Check';
import CheckCircleFilled from '@/icons/alerts/CheckCircleFilled';
import CheckCircleLine from '@/icons/alerts/CheckCircleLine';
import CheckDouble from '@/icons/alerts/CheckDouble';
import CheckSquareFilled from '@/icons/alerts/CheckSquareFilled';
import CheckSquareLine from '@/icons/alerts/CheckSquareLine';
import CheckThick from '@/icons/alerts/CheckThick';
import CheckVerifiedFilled from '@/icons/alerts/CheckVerifiedFilled';
import CheckVerifiedLine from '@/icons/alerts/CheckVerifiedLine';
import HelpCircleFilled from '@/icons/alerts/HelpCircleFilled';
import HelpCircleLine from '@/icons/alerts/HelpCircleLine';
import InfoCircleFilled from '@/icons/alerts/InfoCircleFilled';
import InfoCircleLine from '@/icons/alerts/InfoCircleLine';
import Minus from '@/icons/alerts/Minus';
import MinusCircleFilled from '@/icons/alerts/MinusCircleFilled';
import MinusCircleLine from '@/icons/alerts/MinusCircleLine';
import MinusSquareFilled from '@/icons/alerts/MinusSquareFilled';
import MinusSquareLine from '@/icons/alerts/MinusSquareLine';
import MinusThick from '@/icons/alerts/MinusThick';
import Plus from '@/icons/alerts/Plus';
import PlusCircleFilled from '@/icons/alerts/PlusCircleFilled';
import PlusCircleLine from '@/icons/alerts/PlusCircleLine';
import PlusThick from '@/icons/alerts/PlusThick';
import Radio from '@/icons/alerts/Radio';
import RadioOff from '@/icons/alerts/RadioOff';
import SlashCircle from '@/icons/alerts/SlashCircle';
import SquareOff from '@/icons/alerts/SquareOff';
import XCircleFilled from '@/icons/alerts/XCircleFilled';
import XCircleLine from '@/icons/alerts/XCircleLine';
import XClose from '@/icons/alerts/XClose';
import XCloseThick from '@/icons/alerts/XCloseThick';
import { Icon } from '@/icons/Icons.types';

const icons = {
  bellRinging: {
    line: BellRingingLine,
    filled: BellRingingFilled
  },
  bellOff: {
    line: BellOffLine,
    filled: BellOffFilled
  },
  announcement: {
    line: AnnouncementLine,
    filled: AnnouncementFilled
  },
  slashCircle: {
    line: SlashCircle
  },
  radio: {
    line: Radio
  },
  radioOff: {
    line: RadioOff
  },
  alertCircle: {
    line: AlertCircleLine,
    filled: AlertCircleFilled
  },
  alertTriangle: {
    line: AlertTriangleLine,
    filled: AlertTriangleFilled
  },
  infoCircle: {
    line: InfoCircleLine,
    filled: InfoCircleFilled
  },
  helpCircle: {
    line: HelpCircleLine,
    filled: HelpCircleFilled
  },
  plus: {
    line: Plus,
    thick: PlusThick
  },
  minus: {
    line: Minus,
    thick: MinusThick
  },
  plusCircle: {
    line: PlusCircleLine,
    filled: PlusCircleFilled
  },
  minusCircle: {
    line: MinusCircleLine,
    filled: MinusCircleFilled
  },
  minusSquare: {
    line: MinusSquareLine,
    filled: MinusSquareFilled
  },
  squareOff: {
    line: SquareOff
  },
  check: {
    line: Check,
    thick: CheckThick
  },
  checkDouble: {
    line: CheckDouble
  },
  checkCircle: {
    line: CheckCircleLine,
    filled: CheckCircleFilled
  },
  checkSquare: {
    line: CheckSquareLine,
    filled: CheckSquareFilled
  },
  checkVerified: {
    line: CheckVerifiedLine,
    filled: CheckVerifiedFilled
  },
  xClose: {
    line: XClose,
    thick: XCloseThick
  },
  xCircle: {
    line: XCircleLine,
    filled: XCircleFilled
  }
};

type AlertsIconMap = typeof icons;
type AlertsIconName = keyof AlertsIconMap;

interface AlertsProps<N extends AlertsIconName> extends Icon {
  name: N;
  variant: keyof AlertsIconMap[N];
}

export const Alerts = <N extends AlertsIconName>({
  name,
  variant,
  ...rest
}: AlertsProps<N>) => {
  const IconComponent = icons[name]?.[variant] as React.FC<Icon>;

  return IconComponent ? <IconComponent {...rest} /> : null;
};
