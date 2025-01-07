import React, { FC } from 'react';
import { IconParams } from './iconParams';

export const PlusIcon: FC<IconParams> = ({ fill, size, height, width, ...props }) => {
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
        d="M12 6V12V18M18 12H6"
        stroke="#242220"
        strokeOpacity="0.4"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
};
