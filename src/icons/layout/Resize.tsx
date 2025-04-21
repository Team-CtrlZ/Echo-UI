import React from 'react';

import { Icon } from '@/icons/Icons.types';

const Resize: React.FC<Icon> = ({ width, height, color }: Icon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M22.9995 8.48003V4.52002L4.51953 23H8.47953L22.9995 8.48003Z"
      fill={color}
    />
    <path
      d="M22.9995 11.52V15.48L15.4795 23H11.5195L22.9995 11.52Z"
      fill={color}
    />
    <path d="M22.9995 18.52V23H18.5195L22.9995 18.52Z" fill={color} />
  </svg>
);

export default Resize;
