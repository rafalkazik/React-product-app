import React from 'react';
import '../../styles/Header.scss';

const Header = (props: { children: React.ReactNode }) => {
  return <header className='header'>{props.children}</header>;
};

export default Header;
