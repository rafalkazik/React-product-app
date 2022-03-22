import React from 'react';
import '../../styles/components/Header.scss';
import '../../styles/components/LoginButton.scss';
import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import { Login } from '../Login/Login';

const LoginButton = () => {
  return (
    <div className='header__login login'>
      <Link className='login__link' to={AppRoute.Login}>
        <button className='login__button'>Log in</button>
      </Link>
    </div>
  );
};

export default LoginButton;
