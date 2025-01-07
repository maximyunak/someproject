import React from 'react';

import './title.scss';

interface ITitleProps {
  children: React.ReactNode;
  size?: number;
  marginBottom?: number;
  weight?: number;
  color?: string;
}

export const Title: React.FC<ITitleProps> = ({
  children,
  size,
  marginBottom,
  weight,
  ...props
}) => {
  return (
    <h1
      className="title"
      style={{ fontSize: size, marginBottom: marginBottom, fontWeight: weight, ...props }}
    >
      {children}
    </h1>
  );
};
