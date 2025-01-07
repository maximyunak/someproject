import React, { FC } from 'react';
import { IconParams } from './iconParams';

export const ArrowIcon: FC<IconParams> = ({ fill, size, height, width, ...props }) => {
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
        d="M12.0009 10.0525L7.46527 14.5503C7.12914 14.8832 6.58702 14.8832 6.25089 14.5503C6.09032 14.3916 6 14.1753 6 13.9496C6 13.7239 6.09032 13.5076 6.25089 13.3489L11.3928 8.25047C11.7286 7.91651 12.2714 7.91651 12.6072 8.25047L17.7491 13.3487C17.9097 13.5076 18 13.7239 18 13.9496C18 14.1753 17.9097 14.3916 17.7491 14.5505C17.4129 14.8832 16.8708 14.8832 16.5347 14.5501L12.0009 10.0525Z"
        fill="#242220"
        fillOpacity="0.48"
      />
    </svg>
  );
};
