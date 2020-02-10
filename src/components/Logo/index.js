import React from 'react';
import { StyledLogo } from './styled';
import LogoImage from '../../assets/images/headers/logo.png';
import strings from '../../constants/strings';

const Logo = () => {
  return (
    <StyledLogo>
      <img src={LogoImage} alt={strings.portfolioOf} />
    </StyledLogo>
  );
};

export default Logo;
