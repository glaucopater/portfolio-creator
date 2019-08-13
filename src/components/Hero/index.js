import React, { Fragment } from 'react';
import { StyledHero } from './styled';
import { NavLink } from 'react-router-dom';
import strings from '../../constants/strings';

const Hero = ({ galleryName }) => {
  return (
    <StyledHero>
      <h1>{strings.portfolioOf}</h1>
      <article>
        <Fragment>
          <NavLink to="/">{strings.home}</NavLink>
          {galleryName && <p>{galleryName}</p>}
        </Fragment>
      </article>
    </StyledHero>
  );
};
export default Hero;
