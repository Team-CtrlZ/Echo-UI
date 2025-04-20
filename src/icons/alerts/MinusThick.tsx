import React from 'react';
import { Icon } from '@/icons/Icons.types';

const MinusThick: React.FC<Icon> = ({ width, height, color }: Icon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M3 12C3 11.282 3.58203 10.7 4.3 10.7L19.7 10.7C20.418 10.7 21 11.282 21 12C21 12.7179 20.418 13.3 19.7 13.3H4.3C3.58203 13.3 3 12.7179 3 12Z"
      fill={color}
    />
  </svg>
);

export default MinusThick;
