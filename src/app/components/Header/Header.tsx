import React from 'react';

const Header = (props: { children: React.ReactChild }) => {
  return <header>{props.children}</header>;
};

export default Header;
