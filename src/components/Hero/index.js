import React from 'react';
import { StyledHero } from './styled';
const Hero = () => {
  return (
    <StyledHero>
      <h1>Glauco Pater Portfolio</h1>
      <article>
        <p>Explore my photo gallery.</p>
        <a href="#galleries">Browse Galleries</a>
      </article>
    </StyledHero>
  );
};
export default Hero;
