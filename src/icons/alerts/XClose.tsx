import React from 'react';
import { Icon } from '@/icons/Icons.types';

const XClose: React.FC<Icon> = ({ width, height, color }: Icon) => (
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
      d="M4.61361 4.61358C4.96508 4.26211 5.53493 4.26211 5.8864 4.61358L12 10.7272L18.1136 4.61358C18.4651 4.26211 19.0349 4.26211 19.3864 4.61358C19.7379 4.96505 19.7379 5.5349 19.3864 5.88637L13.2728 12L19.3864 18.1136C19.7379 18.4651 19.7379 19.0349 19.3864 19.3864C19.0349 19.7378 18.4651 19.7378 18.1136 19.3864L12 13.2728L5.8864 19.3864C5.53493 19.7378 4.96508 19.7378 4.61361 19.3864C4.26214 19.0349 4.26214 18.4651 4.61361 18.1136L10.7272 12L4.61361 5.88637C4.26214 5.5349 4.26214 4.96505 4.61361 4.61358Z"
      fill={color}
    />
  </svg>
);

export default XClose;
