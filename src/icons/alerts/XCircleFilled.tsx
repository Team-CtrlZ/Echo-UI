import React from 'react';

import { Icon } from '@/icons/Icons.types';

const XCircleFilled: React.FC<Icon> = ({ width, height, color }: Icon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.10001 12C2.10001 6.53236 6.53239 2.09998 12 2.09998C17.4676 2.09998 21.9 6.53236 21.9 12C21.9 17.4676 17.4676 21.9 12 21.9C6.53239 21.9 2.10001 17.4676 2.10001 12ZM8.5 7.22721L7.22721 8.5L10.7272 12L7.22721 15.5L8.5 16.7728L12 13.2728L15.5 16.7728L16.7728 15.5L13.2728 12L16.7728 8.5L15.5 7.22721L12 10.7272L8.5 7.22721Z"
      fill={color}
    />
  </svg>
);

export default XCircleFilled;
