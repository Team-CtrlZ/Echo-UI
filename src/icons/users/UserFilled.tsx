import React from 'react';
import { Icon } from '@/icons/Icons.types';

const UserFilled: React.FC<Icon> = ({ width, height, color }: Icon) => (
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
      d="M6.63113 16.3732C8.19383 15.4738 10.0805 15 12 15C13.9195 15 15.8062 15.4738 17.3689 16.3732C18.931 17.2722 20.1188 18.5702 20.6691 20.1106C20.8549 20.6307 20.584 21.203 20.0639 21.3888C17.2679 22.3877 6.73212 22.3877 3.93617 21.3888C3.41608 21.203 3.1451 20.6307 3.33091 20.1106C3.88124 18.5702 5.06902 17.2722 6.63113 16.3732Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.00002 8C7.00002 5.23858 9.23859 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23859 13 7.00002 10.7614 7.00002 8Z"
      fill={color}
    />
  </svg>
);

export default UserFilled;
