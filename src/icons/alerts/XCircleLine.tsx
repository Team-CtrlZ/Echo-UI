import React from 'react';

import { Icon } from '@/icons/Icons.types';

const XCircleLine: React.FC<Icon> = ({ width, height, color }: Icon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M7.22721 8.49997L8.5 7.22717L12 10.7272L15.5 7.22717L16.7728 8.49997L13.2728 12L16.7728 15.5L15.5 16.7728L12 13.2728L8.5 16.7728L7.22721 15.5L10.7272 12L7.22721 8.49997Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2.09998C6.53238 2.09998 2.1 6.53236 2.1 12C2.1 17.4676 6.53238 21.9 12 21.9C17.4676 21.9 21.9 17.4676 21.9 12C21.9 6.53236 17.4676 2.09998 12 2.09998ZM3.9 12C3.9 7.52647 7.52649 3.89998 12 3.89998C16.4735 3.89998 20.1 7.52647 20.1 12C20.1 16.4735 16.4735 20.1 12 20.1C7.52649 20.1 3.9 16.4735 3.9 12Z"
      fill={color}
    />
  </svg>
);

export default XCircleLine;
