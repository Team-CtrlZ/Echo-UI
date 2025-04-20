import React from 'react';
import { Icon } from '@/icons/Icons.types';

const ChevronDown: React.FC<Icon> = ({ width, height, color }: Icon) => (
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
      d="M12.7071 16.4571C12.3166 16.8476 11.6834 16.8476 11.2929 16.4571L3.79289 8.95711C3.40237 8.56658 3.40237 7.93342 3.79289 7.54289C4.18342 7.15237 4.81658 7.15237 5.20711 7.54289L12 14.3358L18.7929 7.54289C19.1834 7.15237 19.8166 7.15237 20.2071 7.54289C20.5976 7.93342 20.5976 8.56658 20.2071 8.95711L12.7071 16.4571Z"
      fill={color}
    />
  </svg>
);

export default ChevronDown;
