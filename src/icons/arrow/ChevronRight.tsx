import React from 'react';

import { Icon } from '@/icons/Icons.types';

const ChevronRight: React.FC<Icon> = ({ width, height, color }: Icon) => (
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
      d="M16.4571 11.2929C16.8476 11.6834 16.8476 12.3166 16.4571 12.7071L8.95711 20.2071C8.56658 20.5976 7.93342 20.5976 7.54289 20.2071C7.15237 19.8166 7.15237 19.1834 7.54289 18.7929L14.3358 12L7.54289 5.20711C7.15237 4.81658 7.15237 4.18342 7.54289 3.79289C7.93342 3.40237 8.56658 3.40237 8.95711 3.79289L16.4571 11.2929Z"
      fill={color}
    />
  </svg>
);

export default ChevronRight;
