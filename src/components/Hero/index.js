import React, { Fragment } from 'react';
import { StyledHero } from './styled';
import { NavLink } from 'react-router-dom';
import strings from '../../constants/strings';

const Hero = ({ galleryName, imageName }) => {
  return (
    <StyledHero>
      <h1>{strings.portfolioOf}</h1>
      <article>
        <Fragment>
          <NavLink to="/">{strings.home}</NavLink>
          {galleryName && !imageName && <p>{galleryName}</p>}
          {galleryName && imageName && (
            <NavLink to={`/gallery/${galleryName}`}>{galleryName}</NavLink>
          )}
        </Fragment>
      </article>
    </StyledHero>
  );
};
export default Hero;
