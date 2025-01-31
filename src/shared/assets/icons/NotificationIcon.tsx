import React, { FC } from 'react';
import { IconParams } from './iconParams';

export const NotificationIcon: FC<IconParams> = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 17C16.9758 17 19.2777 16.3609 19.5 13.7957C19.5 11.2323 17.8951 11.3972 17.8951 8.25198C17.8951 5.79524 15.5693 3 12 3C8.43068 3 6.10487 5.79524 6.10487 8.25198C6.10487 11.3972 4.5 11.2323 4.5 13.7957C4.72319 16.3706 7.02509 17 12 17Z"
        stroke="#242220"
        strokeOpacity="0.56"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 20C12.8794 21.3255 11.1313 21.3412 10 20"
        stroke="#242220"
        strokeOpacity="0.56"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
