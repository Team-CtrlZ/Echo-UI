import React from 'react';

import { Icon } from '@/icons/Icons.types';

const MedicalSquare: React.FC<Icon> = ({ width, height, color }: Icon) => (
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
      d="M9.125 7C9.125 6.17157 9.79657 5.5 10.625 5.5H13.375C14.2034 5.5 14.875 6.17157 14.875 7V9.15H17C17.8284 9.15 18.5 9.82157 18.5 10.65V13.4C18.5 14.2284 17.8284 14.9 17 14.9H14.875V17C14.875 17.8284 14.2034 18.5 13.375 18.5H10.625C9.79657 18.5 9.125 17.8284 9.125 17V14.9H7C6.17157 14.9 5.5 14.2284 5.5 13.4V10.65C5.5 9.82157 6.17157 9.15 7 9.15H9.125V7ZM11.125 7.5V9.65C11.125 10.4784 10.4534 11.15 9.625 11.15H7.5V12.9H9.625C10.4534 12.9 11.125 13.5716 11.125 14.4V16.5H12.875V14.4C12.875 13.5716 13.5466 12.9 14.375 12.9H16.5V11.15H14.375C13.5466 11.15 12.875 10.4784 12.875 9.65V7.5H11.125Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 6C1 3.23858 3.23858 1 6 1H18C20.7614 1 23 3.23858 23 6V18C23 20.7614 20.7614 23 18 23H6C3.23858 23 1 20.7614 1 18V6ZM6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6Z"
      fill={color}
    />
  </svg>
);

export default MedicalSquare;
