import React from 'react';
import '../../styles/components/Header.scss';

const Header = (props: { children: React.ReactNode }) => {
  return (
    <header className='header'>
      <div className='header__wrapper'>{props.children}</div>
    </header>
  );
};

export default Header;
