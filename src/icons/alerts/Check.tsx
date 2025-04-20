import React from 'react';
import { Icon } from '@/icons/Icons.types';

const Check: React.FC<Icon> = ({ width, height, color }: Icon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M19.3864 6.86358C19.7379 7.21505 19.7379 7.7849 19.3864 8.13637L10.3864 17.1364C10.0349 17.4878 9.46508 17.4878 9.11361 17.1364L4.61361 12.6364C4.26214 12.2849 4.26214 11.7151 4.61361 11.3636C4.96508 11.0121 5.53493 11.0121 5.8864 11.3636L9.75001 15.2272L18.1136 6.86358C18.4651 6.51211 19.0349 6.51211 19.3864 6.86358Z"
      fill={color}
    />
  </svg>
);

export default Check;
