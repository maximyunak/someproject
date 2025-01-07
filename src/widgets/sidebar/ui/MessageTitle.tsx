import React from 'react';
import { Link } from 'react-router-dom';

export const MessageTitle = () => {
  return (
    <Link to="" className="message hover-opacity">
      <p className="circle">
        <span className="net"></span>
      </p>
      <h2>Имя Фамилия</h2>
    </Link>
  );
};
