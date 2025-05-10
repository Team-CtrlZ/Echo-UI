import React from 'react';

import { Icon } from '@/icons/Icons.types';

const XCloseThick: React.FC<Icon> = ({ width, height, color }: Icon) => (
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
      d="M4.33077 4.33071C4.83845 3.82303 5.66157 3.82303 6.16925 4.33071L12 10.1615L17.8308 4.33071C18.3384 3.82303 19.1616 3.82303 19.6692 4.33071C20.1769 4.83839 20.1769 5.66151 19.6692 6.16919L13.8385 12L19.6692 17.8307C20.1769 18.3384 20.1769 19.1615 19.6692 19.6692C19.1616 20.1769 18.3384 20.1769 17.8308 19.6692L12 13.8384L6.16925 19.6692C5.66157 20.1769 4.83845 20.1769 4.33077 19.6692C3.82309 19.1615 3.82309 18.3384 4.33077 17.8307L10.1615 12L4.33077 6.16919C3.82309 5.66151 3.82309 4.83839 4.33077 4.33071Z"
      fill={color}
    />
  </svg>
);

export default XCloseThick;
