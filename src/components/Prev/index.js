import React from 'react';
import strings from '../../constants/strings';
import { NavLink } from 'react-router-dom';
import { StyledPrev } from './styled';

const Prev = ({ gallery, currentImage, imagesCount }) => {
  const currentPos = +currentImage.replace(gallery, '');

  if (currentPos === 1) {
    return <StyledPrev>{strings.prev}</StyledPrev>;
  }
  return (
    <StyledPrev>
      <NavLink to={`/gallery/${gallery}/${gallery}${currentPos - 1}`}>
        {strings.prev}
      </NavLink>
    </StyledPrev>
  );
};

export default Prev;
