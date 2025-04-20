import React from 'react';
import { Icon } from '@/icons/Icons.types';

const AlertCircleFilled: React.FC<Icon> = ({ width, height, color }: Icon) => (
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
      d="M2.10001 12.0001C2.10001 6.53248 6.53239 2.1001 12 2.1001C17.4676 2.1001 21.9 6.53248 21.9 12.0001C21.9 17.4677 17.4676 21.9001 12 21.9001C6.53239 21.9001 2.10001 17.4677 2.10001 12.0001ZM13 16.2501C13 16.8024 12.5523 17.2501 12 17.2501C11.4477 17.2501 11 16.8024 11 16.2501C11 15.6978 11.4477 15.2501 12 15.2501C12.5523 15.2501 13 15.6978 13 16.2501ZM11.1 6.75012V13.7501H12.9V6.75012H11.1Z"
      fill={color}
    />
  </svg>
);

export default AlertCircleFilled;
