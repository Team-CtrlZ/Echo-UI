import React from 'react';

import { Icon } from '@/icons/Icons.types';

const MessageMultipleLine: React.FC<Icon> = ({
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
      d="M2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10V18H10C5.58172 18 2 14.4183 2 10ZM16 10V16H10C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10Z"
      fill={color}
    />
    <path
      d="M10.6822 19H10C9.12711 19 8.28323 18.8757 7.48511 18.6439C8.93587 20.6756 11.3133 22 14 22H22V14C22 11.3133 20.6756 8.93587 18.6439 7.48511C18.8757 8.28323 19 9.12711 19 10V10.6822C19.6319 11.6325 20 12.7733 20 14V20H14C12.7733 20 11.6325 19.6319 10.6822 19Z"
      fill={color}
    />
  </svg>
);

export default MessageMultipleLine;
