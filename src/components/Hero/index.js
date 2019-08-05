import React from 'react';
import { StyledHero } from './styled';
import { NavLink } from 'react-router-dom';
import strings from '../../constants/strings';

const Hero = () => {
  return (
    <StyledHero>
      <h1>
        {strings.portfolioOf} {strings.author}
      </h1>
      <article>
        <p>{strings.explore}</p>
        <NavLink to="#galleries">{strings.browse}</NavLink>
      </article>
    </StyledHero>
  );
};
export default Hero;
