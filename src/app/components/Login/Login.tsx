import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';

export const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>
            username:
            <input name='username' />
          </label>
        </div>
        <div>
          <label>
            password:
            <input name='password' type='password' />
          </label>
        </div>
        <Link to={AppRoute.Home}>
          <button type='submit'>submit</button>
        </Link>
      </form>
    </div>
  );
};
