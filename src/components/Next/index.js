import React from 'react';
import strings from '../../constants/strings';
import { NavLink } from 'react-router-dom';
import { StyledNext } from './styled';

const Next = ({ gallery, currentImage, imagesCount }) => {
  const currentPos = +currentImage.replace(gallery, '');

  if (currentPos === imagesCount) {
    return <StyledNext>{strings.next}</StyledNext>;
  }
  return (
    <StyledNext>
      <NavLink to={`/gallery/${gallery}/${gallery}${currentPos + 1}`}>
        {strings.next}
      </NavLink>
    </StyledNext>
  );
};

export default Next;
