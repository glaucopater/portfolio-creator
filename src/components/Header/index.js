import React from 'react';
import { StyledHeader } from './styled';
import { NavLink } from 'react-router-dom';

const Header = ({ title, linkObject }) => (
  <StyledHeader>
    <h1>{title}</h1>
    {linkObject && (
      <span>
        <NavLink to={linkObject.url}>{linkObject.title}</NavLink>
      </span>
    )}
  </StyledHeader>
);

export default Header;
