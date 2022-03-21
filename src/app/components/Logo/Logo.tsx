import React from 'react';
import '../../styles/components/Logo.scss';

const Logo = () => {
  return (
    <div className='header__logo-container'>
      <h1 className='header__logo-title'>
        <a className='header__logo-link' href=''>
          join.tsh.io
        </a>
      </h1>
    </div>
  );
};

export default Logo;
