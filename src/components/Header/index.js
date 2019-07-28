import React from 'react';
import { StyledHeader } from './styled';

const Header = ({ title, linkObject }) => {
  return (
    <StyledHeader>
      <h1>{title}</h1>
      {linkObject && (
        <span>
          <a href={linkObject.url}>{linkObject.title}</a>
        </span>
      )}
    </StyledHeader>
  );
};
export default Header;
