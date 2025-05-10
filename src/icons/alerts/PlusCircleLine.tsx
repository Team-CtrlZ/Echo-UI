import React from 'react';

import { Icon } from '@/icons/Icons.types';

const PlusCircleLine: React.FC<Icon> = ({ width, height, color }: Icon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V11H8C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H11V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H13V8Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.0001 2.09998C6.53247 2.09998 2.1001 6.53236 2.1001 12C2.1001 17.4676 6.53247 21.9 12.0001 21.9C17.4677 21.9 21.9001 17.4676 21.9001 12C21.9001 6.53236 17.4677 2.09998 12.0001 2.09998ZM3.9001 12C3.9001 7.52647 7.52659 3.89998 12.0001 3.89998C16.4736 3.89998 20.1001 7.52647 20.1001 12C20.1001 16.4735 16.4736 20.1 12.0001 20.1C7.52659 20.1 3.9001 16.4735 3.9001 12Z"
      fill={color}
    />
  </svg>
);

export default PlusCircleLine;
