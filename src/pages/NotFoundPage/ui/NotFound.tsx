import React from 'react';

import './NotFound.scss';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="notfound">
      <h1>404</h1>
      <h2>Страница не найдена</h2>
      <Link to="/courses">Вернуться к курсам</Link>
    </div>
  );
};
