import React from 'react';
import { Icon } from '@/icons/Icons.types';

const ChevronLeft: React.FC<Icon> = ({ width, height, color }: Icon) => (
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
      d="M7.54289 12.7071C7.15237 12.3166 7.15237 11.6834 7.54289 11.2929L15.0429 3.79289C15.4334 3.40237 16.0666 3.40237 16.4571 3.79289C16.8476 4.18342 16.8476 4.81658 16.4571 5.20711L9.66421 12L16.4571 18.7929C16.8476 19.1834 16.8476 19.8166 16.4571 20.2071C16.0666 20.5976 15.4334 20.5976 15.0429 20.2071L7.54289 12.7071Z"
      fill={color}
    />
  </svg>
);

export default ChevronLeft;
