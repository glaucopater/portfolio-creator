import React from 'react';
import { StyledFooter } from './styled';
import strings from '../../constants/strings';

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        {strings.author} 2019 - {strings.rights}
      </p>
    </StyledFooter>
  );
};
export default Footer;
