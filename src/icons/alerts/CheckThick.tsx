import React from 'react';

import { Icon } from '@/icons/Icons.types';

const CheckThick: React.FC<Icon> = ({ width, height, color }: Icon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M19.6692 6.58071C20.1769 7.08839 20.1769 7.91151 19.6692 8.41919L10.6692 17.4192C10.1616 17.9269 9.33844 17.9269 8.83076 17.4192L4.33076 12.9192C3.82308 12.4115 3.82308 11.5884 4.33076 11.0807C4.83844 10.573 5.66155 10.573 6.16924 11.0807L9.75 14.6615L17.8308 6.58071C18.3384 6.07303 19.1616 6.07303 19.6692 6.58071Z"
      fill={color}
    />
  </svg>
);

export default CheckThick;
