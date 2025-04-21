import React from 'react';

import { Icon } from '@/icons/Icons.types';
import CameraFilled from '@/icons/media/CameraFilled';
import CameraLine from '@/icons/media/CameraLine';
import Headphones from '@/icons/media/Headphones';
import ImageFilled from '@/icons/media/ImageFilled';
import ImageLine from '@/icons/media/ImageLine';
import ImagePlus from '@/icons/media/ImagePlus';
import Microphone from '@/icons/media/Microphone';
import PauseCircle from '@/icons/media/PauseCircle';
import Phone from '@/icons/media/Phone';
import PlayFilled from '@/icons/media/PlayFilled';
import PlayLine from '@/icons/media/PlayLine';
import PlaySquareFilled from '@/icons/media/PlaySquareFilled';
import PlaySquareLine from '@/icons/media/PlaySquareLine';
import QrCode from '@/icons/media/QrCode';
import Recording from '@/icons/media/Recording';

const icons = {
  image: {
    line: ImageLine,
    filled: ImageFilled
  },
  imagePlus: {
    line: ImagePlus
  },
  camera: {
    line: CameraLine,
    filled: CameraFilled
  },
  play: {
    line: PlayLine,
    filled: PlayFilled
  },
  playSquare: {
    line: PlaySquareLine,
    filled: PlaySquareFilled
  },
  headphones: {
    line: Headphones
  },
  microphone: {
    line: Microphone
  },
  recording: {
    line: Recording
  },
  pauseCircle: {
    line: PauseCircle
  },
  qrCode: {
    line: QrCode
  },
  phone: {
    line: Phone
  }
};

type MediaIconMap = typeof icons;
type MediaIconName = keyof MediaIconMap;

interface MediaProps<N extends MediaIconName> extends Icon {
  name: N;
  variant: keyof MediaIconMap[N];
}

export const Media = <N extends MediaIconName>({
  name,
  variant,
  ...rest
}: MediaProps<N>) => {
  const IconComponent = icons[name]?.[variant] as React.FC<Icon>;

  return IconComponent ? <IconComponent {...rest} /> : null;
};
