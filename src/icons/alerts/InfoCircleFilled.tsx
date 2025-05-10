import React from 'react';

import { Icon } from '@/icons/Icons.types';

const InfoCircleFilled: React.FC<Icon> = ({ width, height, color }: Icon) => (
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
      d="M12 2.09998C6.53239 2.09998 2.10001 6.53236 2.10001 12C2.10001 17.4676 6.53239 21.9 12 21.9C17.4676 21.9 21.9 17.4676 21.9 12C21.9 6.53236 17.4676 2.09998 12 2.09998ZM12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7ZM11.1 17V10.5H12.9V17H11.1Z"
      fill={color}
    />
  </svg>
);

export default InfoCircleFilled;
