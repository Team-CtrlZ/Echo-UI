import React from 'react';

import { Icon } from '@/icons/Icons.types';

const InfoCircleLine: React.FC<Icon> = ({ width, height, color }: Icon) => (
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
      d="M12 2.09998C6.53238 2.09998 2.1 6.53236 2.1 12C2.1 17.4676 6.53238 21.9 12 21.9C17.4676 21.9 21.9 17.4676 21.9 12C21.9 6.53236 17.4676 2.09998 12 2.09998ZM12 3.89998C7.52649 3.89998 3.9 7.52647 3.9 12C3.9 16.4735 7.52649 20.1 12 20.1C16.4735 20.1 20.1 16.4735 20.1 12C20.1 7.52647 16.4735 3.89998 12 3.89998ZM11 7.99998C11 7.44769 11.4477 6.99998 12 6.99998C12.5523 6.99998 13 7.44769 13 7.99998C13 8.55226 12.5523 8.99998 12 8.99998C11.4477 8.99998 11 8.55226 11 7.99998ZM11.1 10.5V17H12.9V10.5H11.1Z"
      fill={color}
    />
  </svg>
);

export default InfoCircleLine;
