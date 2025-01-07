import React from 'react';
import './button.scss';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  light: boolean;
  marginTop: string;
}

const Button = ({ children, type = 'button', light, marginTop }: ButtonProps) => {
  return (
    <button className={`button ${light && 'bg-light'}`} style={{ marginTop }} type={type}>
      {children}
    </button>
  );
};

export default Button;
