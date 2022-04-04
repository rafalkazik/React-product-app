import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/components/Login.scss';

import { AppRoute } from 'routing/AppRoute.enum';

export const Login = () => {
  return (
    <div className='login__wrapper login'>
      <div className='login__photo'></div>
      <div className='login__content'>
        <h2 className='login__logo'>find.it</h2>
        <div className='login__login-form-wrapper'>
          <h2 className='login__title'>Login</h2>
          <form className='login__login-form login-form'>
            <div className='login-form__input-wrapper'>
              <label className='login-form__label'>
                Username:
                <input
                  name='username'
                  className='login-form__input'
                  placeholder='Enter username'
                />
              </label>
            </div>
            <div className='login-form__input-wrapper'>
              <label className='login-form__label'>
                Password:
                <input
                  name='password'
                  type='password'
                  className='login-form__input'
                  placeholder='Enter password'
                />
              </label>
            </div>

            <Link to={AppRoute.Home}>
              <button type='submit' className='login-form__submit'>
                Log in
              </button>
            </Link>

            <a className='login-form__forgot-pass' href='#'>
              Forgot password?
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};
