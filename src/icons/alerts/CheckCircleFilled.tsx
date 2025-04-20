import React from 'react';
import { Icon } from '@/icons/Icons.types';

const CheckCircleFilled: React.FC<Icon> = ({ width, height, color }: Icon) => (
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
      d="M17.1458 9.62682L10.6765 16.2922L6.85417 12.3541L8.14581 11.1004L10.6765 13.7078L15.8542 8.37317L17.1458 9.62682ZM2.1 12C2.1 6.53236 6.53238 2.09998 12 2.09998C17.4676 2.09998 21.9 6.53236 21.9 12C21.9 17.4676 17.4676 21.9 12 21.9C6.53238 21.9 2.1 17.4676 2.1 12Z"
      fill={color}
    />
  </svg>
);

export default CheckCircleFilled;
