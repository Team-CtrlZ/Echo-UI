import React from 'react';
import { Icon } from '@/icons/Icons.types';

const ClockLine: React.FC<Icon> = ({ width, height, color }: Icon) => (
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
      d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 5.6C12.5523 5.6 13 6.04772 13 6.6V11.382L16.0472 12.9056C16.5412 13.1526 16.7414 13.7532 16.4944 14.2472C16.2474 14.7412 15.6468 14.9414 15.1528 14.6944L11.5528 12.8944C11.214 12.725 11 12.3788 11 12V6.6C11 6.04772 11.4477 5.6 12 5.6Z"
      fill={color}
    />
  </svg>
);

export default ClockLine;
