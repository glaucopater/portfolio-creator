import React from 'react';
import { StyledFooter } from './styled';
import strings from '../../constants/strings';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        {strings.author} {new Date().getFullYear()} - {strings.rights}
      </p>
      <NavLink to={'/disclaimer'}>{strings.disclaimer}</NavLink>
    </StyledFooter>
  );
};
export default Footer;
