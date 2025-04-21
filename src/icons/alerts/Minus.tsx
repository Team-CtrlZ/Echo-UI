import React from 'react';

import { Icon } from '@/icons/Icons.types';

const Minus: React.FC<Icon> = ({ width, height, color }: Icon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M3 12C3 11.5029 3.40294 11.1 3.9 11.1L20.1 11.1C20.5971 11.1 21 11.5029 21 12C21 12.497 20.5971 12.9 20.1 12.9H3.9C3.40294 12.9 3 12.497 3 12Z"
      fill={color}
    />
  </svg>
);

export default Minus;
