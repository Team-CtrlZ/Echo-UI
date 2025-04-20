import Clip from '@/icons/editor/Clip';
import EditPencil from '@/icons/editor/EditPencil';
import EditSquare from '@/icons/editor/EditSquare';
import italicSquare from '@/icons/editor/ItalicSquare';
import Link from '@/icons/editor/Link';
import LinkBroken from '@/icons/editor/LinkBroken';
import ZoomIn from '@/icons/editor/ZoomIn';
import ZoomOut from '@/icons/editor/ZoomOut';
import { Icon } from '@/icons/Icons.types';
import React from 'react';

const icons = {
  edit: {
    square: EditSquare,
    pencil: EditPencil
  },
  clip: {
    line: Clip
  },
  link: {
    line: Link
  },
  linkBroken: {
    line: LinkBroken
  },
  italicSquare: {
    line: italicSquare
  },
  zoom: {
    in: ZoomIn,
    out: ZoomOut
  }
};

type EditorIconMap = typeof icons;
type EditorIconName = keyof EditorIconMap;

interface EditorProps<N extends EditorIconName> extends Icon {
  name: N;
  variant: keyof EditorIconMap[N];
}

export const Editor = <N extends EditorIconName>({
  name,
  variant,
  ...rest
}: EditorProps<N>) => {
  const IconComponent = icons[name]?.[variant] as React.FC<Icon>;

  return IconComponent ? <IconComponent {...rest} /> : null;
};
