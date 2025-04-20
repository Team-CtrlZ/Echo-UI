import React from 'react';
import { Icon } from '@/icons/Icons.types';

const PlusThick: React.FC<Icon> = ({ width, height, color }: Icon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12 3C12.643 3 13.1642 3.52122 13.1642 4.16418V10.8358H19.8358C20.4788 10.8358 21 11.357 21 12C21 12.643 20.4788 13.1642 19.8358 13.1642H13.1642V19.8358C13.1642 20.4788 12.643 21 12 21C11.357 21 10.8358 20.4788 10.8358 19.8358V13.1642H4.16418C3.52122 13.1642 3 12.643 3 12C3 11.357 3.52122 10.8358 4.16418 10.8358H10.8358V4.16418C10.8358 3.52122 11.357 3 12 3Z"
      fill={color}
    />
  </svg>
);

export default PlusThick;
