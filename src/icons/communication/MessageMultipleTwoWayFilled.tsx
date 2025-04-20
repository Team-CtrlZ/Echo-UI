import React from 'react';
import { Icon } from '@/icons/Icons.types';

const MessageMultipleTwoWayFilled: React.FC<Icon> = ({
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
      d="M22 15.3337V22H15.3337C14.1647 21.9987 13.0165 21.69 12.0044 21.1049C10.9923 20.5198 10.1519 19.6788 9.5675 18.6663C10.1958 18.6619 11.3903 18.6328 12.0044 18.5C15.5 17.5 18 14.8007 18.46 11.4362C18.5941 10.8222 18.6644 10.196 18.67 9.5675C19.6818 10.1524 20.5221 10.993 21.1065 12.0051C21.691 13.0171 21.9991 14.1651 22 15.3337ZM17 9.5C17 7.51088 16.2098 5.60322 14.8033 4.1967C13.3968 2.79018 11.4891 2 9.5 2C7.51088 2 5.60322 2.79018 4.1967 4.1967C2.79018 5.60322 2 7.51088 2 9.5L2 17H9.5C11.4884 16.9977 13.3947 16.2068 14.8007 14.8007C16.2068 13.3947 16.9977 11.4884 17 9.5Z"
      fill={color}
    />
  </svg>
);

export default MessageMultipleTwoWayFilled;
