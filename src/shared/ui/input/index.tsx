import React from 'react';
import './input.scss';

interface InputProps {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ placeholder = '', type = 'text', value, onChange }: InputProps) => {
  return (
    <div className="input-wrapper">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input"
      />
    </div>
  );
};
