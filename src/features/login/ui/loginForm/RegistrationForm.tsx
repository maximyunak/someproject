import React from 'react';
import { Title } from 'shared/ui/title';

import './AuthForm.scss';
import { Link } from 'react-router-dom';
import { Input } from 'shared/ui/input';
import Button from 'shared/ui/button';

export const RegistrationForm = () => {
  return (
    <form className="auth-form">
      <div className="auth-form__title">
        <Title>
          <Link className="hover-opacity" to="/login">
            Вход
          </Link>
        </Title>
        <Title>
          <Link className="hover-opacity" to="/registration">
            Регистрация
          </Link>
        </Title>
      </div>
      <div className="auth-form__inputs">
        <div className="auth-form__input">
          <Title size={16} marginBottom={5} weight={500}>
            Имя
          </Title>
          <Input placeholder="Enter Your Name" type="text" />
        </div>

        <div className="auth-form__input">
          <Title size={16} marginBottom={5} weight={500}>
            Фамилия
          </Title>
          <Input placeholder="Enter Your Last Name" type="text" />
        </div>
        <div className="auth-form__input">
          <Title size={16} marginBottom={5} weight={500}>
            Email
          </Title>
          <Input placeholder="Enter Email" type="email" />
        </div>
        <div className="auth-form__input">
          <Title size={16} marginBottom={5} weight={500}>
            Password
          </Title>
          <Input placeholder="Enter Password" type="password" />
        </div>
      </div>
      <div className="auth-form__buttons">
        <Button>Регистрация</Button>
      </div>
    </form>
  );
};
