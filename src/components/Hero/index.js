import React from 'react';
import { StyledHero, StyledHeroHeader } from './styled';
import { NavLink } from 'react-router-dom';
import strings from '../../constants/strings';
import PropTypes from 'prop-types';

const Hero = ({ galleryName, imageName, isSmall }) => (
  <StyledHero isSmall={isSmall}>
    <StyledHeroHeader isSmall={isSmall}>
      <h1>
        <NavLink to="/">{strings.portfolioOf}</NavLink>
      </h1>
    </StyledHeroHeader>
    <div>
      {galleryName && imageName && (
        <>
          <NavLink to={`/gallery/${galleryName}`}>
            {strings.backTo} {galleryName}
          </NavLink>
        </>
      )}
    </div>
  </StyledHero>
);

Hero.prototypes = {
  galleryName: PropTypes.string,
  imageName: PropTypes.string,
  isSmall: PropTypes.bool,
};

export default Hero;
