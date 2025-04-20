import React from 'react';
import { Icon } from '@/icons/Icons.types';

const AlertCircleLine: React.FC<Icon> = ({ width, height, color }: Icon) => (
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
      d="M12 3.9001C7.5265 3.9001 3.90001 7.52659 3.90001 12.0001C3.90001 16.4736 7.5265 20.1001 12 20.1001C16.4735 20.1001 20.1 16.4736 20.1 12.0001C20.1 7.52659 16.4735 3.9001 12 3.9001ZM2.10001 12.0001C2.10001 6.53248 6.53239 2.1001 12 2.1001C17.4676 2.1001 21.9 6.53248 21.9 12.0001C21.9 17.4677 17.4676 21.9001 12 21.9001C6.53239 21.9001 2.10001 17.4677 2.10001 12.0001Z"
      fill={color}
    />
    <path
      d="M13 16.2501C13 16.8024 12.5523 17.2501 12 17.2501C11.4477 17.2501 11 16.8024 11 16.2501C11 15.6978 11.4477 15.2501 12 15.2501C12.5523 15.2501 13 15.6978 13 16.2501Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.1 13.7501V6.7501H12.9V13.7501H11.1Z"
      fill={color}
    />
  </svg>
);

export default AlertCircleLine;
