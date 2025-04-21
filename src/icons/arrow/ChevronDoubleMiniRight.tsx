import React from 'react';

import { Icon } from '@/icons/Icons.types';

const ChevronDoubleMiniRight: React.FC<Icon> = ({
  width,
  height,
  color
}: Icon) => (
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
      d="M18.2071 12.7071C18.5976 12.3166 18.5976 11.6834 18.2071 11.2929L13.2071 6.29289C12.8166 5.90237 12.1834 5.90237 11.7929 6.29289C11.4024 6.68342 11.4024 7.31658 11.7929 7.70711L16.0858 12L11.7929 16.2929C11.4024 16.6834 11.4024 17.3166 11.7929 17.7071C12.1834 18.0976 12.8166 18.0976 13.2071 17.7071L18.2071 12.7071ZM10.0858 12L5.79289 16.2929C5.40237 16.6834 5.40237 17.3166 5.79289 17.7071C6.18342 18.0976 6.81658 18.0976 7.20711 17.7071L12.2071 12.7071C12.5976 12.3166 12.5976 11.6834 12.2071 11.2929L7.20711 6.29289C6.81658 5.90237 6.18342 5.90237 5.79289 6.29289C5.40237 6.68342 5.40237 7.31658 5.79289 7.70711L10.0858 12Z"
      fill={color}
    />
  </svg>
);

export default ChevronDoubleMiniRight;
