import React from 'react';

import Clipboard from '@/icons/files/Clipboard';
import ClipboardCheck from '@/icons/files/ClipboardCheck';
import FileAttachment from '@/icons/files/FileAttachment';
import FileCheck from '@/icons/files/FileCheck';
import FileEmpty from '@/icons/files/FileEmpty';
import FileLine from '@/icons/files/FileLine';
import FileSearch from '@/icons/files/FileSearch';
import Folder from '@/icons/files/Folder';
import FolderMinus from '@/icons/files/FolderMinus';
import FolderPlus from '@/icons/files/FolderPlus';
import FollowUp from '@/icons/files/FollowUp';
import Save from '@/icons/files/Save';
import { Icon } from '@/icons/Icons.types';

const icons = {
  save: {
    line: Save
  },
  folder: {
    line: Folder
  },
  folderMinus: {
    line: FolderMinus
  },
  folderPlus: {
    line: FolderPlus
  },
  file: {
    empty: FileEmpty,
    line: FileLine
  },
  clipboard: {
    line: Clipboard
  },
  clipboardCheck: {
    line: ClipboardCheck
  },
  fileCheck: {
    line: FileCheck
  },
  fileSearch: {
    line: FileSearch
  },
  fileAttachment: {
    line: FileAttachment
  },
  followUp: {
    line: FollowUp
  }
};

type FilesIconMap = typeof icons;
type FilesIconName = keyof FilesIconMap;

interface FilesProps<N extends FilesIconName> extends Icon {
  name: N;
  variant: keyof FilesIconMap[N];
}

export const Files = <N extends FilesIconName>({
  name,
  variant,
  ...rest
}: FilesProps<N>) => {
  const IconComponent = icons[name]?.[variant] as React.FC<Icon>;

  return IconComponent ? <IconComponent {...rest} /> : null;
};
