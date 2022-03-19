import React from 'react';

const Header = (props: { children: React.ReactNode }) => {
  return <header>{props.children}</header>;
};

export default Header;
