import React from 'react';
import { Icon } from '@/icons/Icons.types';

const ClockFilled: React.FC<Icon> = ({ width, height, color }: Icon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM13 6.6001C13 6.04781 12.5523 5.6001 12 5.6001C11.4477 5.6001 11 6.04781 11 6.6001V12.0001C11 12.3789 11.214 12.7251 11.5528 12.8945L15.1528 14.6945C15.6468 14.9415 16.2474 14.7413 16.4944 14.2473C16.7414 13.7533 16.5412 13.1527 16.0472 12.9057L13 11.3821V6.6001Z"
      fill={color}
    />
  </svg>
);

export default ClockFilled;
