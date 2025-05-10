import React from 'react';

import { Icon } from '@/icons/Icons.types';

const Plus: React.FC<Icon> = ({ width, height, color }: Icon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12 3C12.4636 3 12.8394 3.3758 12.8394 3.83938V11.1606H20.1606C20.6242 11.1606 21 11.5364 21 12C21 12.4636 20.6242 12.8394 20.1606 12.8394H12.8394V20.1606C12.8394 20.6242 12.4636 21 12 21C11.5364 21 11.1606 20.6242 11.1606 20.1606V12.8394H3.83938C3.3758 12.8394 3 12.4636 3 12C3 11.5364 3.3758 11.1606 3.83938 11.1606H11.1606V3.83938C11.1606 3.3758 11.5364 3 12 3Z"
      fill={color}
    />
  </svg>
);

export default Plus;
