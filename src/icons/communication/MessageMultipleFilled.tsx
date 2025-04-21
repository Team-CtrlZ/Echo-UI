import React from 'react';

import { Icon } from '@/icons/Icons.types';

const MessageMultipleFilled: React.FC<Icon> = ({
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
      d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18H18V10C18 5.58172 14.4183 2 10 2Z"
      fill={color}
    />
    <path
      d="M8.5 19.5C8.5 19.5 11.3133 22 14 22H22V14C22 11.7121 21.0396 9.64859 19.5 8.1905V19.5C15.8333 19.5 12.1667 19.5 8.5 19.5Z"
      fill={color}
    />
  </svg>
);

export default MessageMultipleFilled;
