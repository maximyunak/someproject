import React from 'react';
import { Title } from 'shared/ui/title';

import './AuthForm.scss';
import { Link } from 'react-router-dom';
import { Input } from 'shared/ui/input';
import Button from 'shared/ui/button';
import { useAppDispatch, useAppSelector } from 'shared/lib/store';
import { setEmail, setPassword } from 'features/login/model/loginSlice';

export const LoginForm = () => {
  const { email, password } = useAppSelector((state) => state.loginSlice);

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(e.target.value));
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <div className="auth-form__title">
        <Title>
          <Link className="hover-opacity" to="/login">
            Вход
          </Link>
        </Title>
        <Title>
          <Link to="/registration">Регистрация</Link>
        </Title>
      </div>
      <div className="auth-form__inputs">
        <div className="auth-form__input">
          <Title size={16} marginBottom={5} weight={500}>
            Email
          </Title>
          <Input
            placeholder="Enter Email"
            // type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="auth-form__input">
          <Title size={16} marginBottom={5} weight={500}>
            Password
          </Title>
          <Input
            placeholder="Enter Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
      </div>
      <div className="auth-form__buttons">
        <Button type="submit">Войти</Button>

        <span className="auth-form__line"></span>
        <Link to="/forgot-password" className="auth-form__forgot">
          Забыли пароль?
        </Link>
      </div>
    </form>
  );
};
