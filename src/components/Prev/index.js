import React from 'react';
import strings from '../../constants/strings';
import { NavLink } from 'react-router-dom';

const Prev = ({ gallery, currentImage }) => {
  const currentPos = +currentImage.replace(gallery, '');

  if (currentPos === 1) {
    return null;
  }
  return (
    <NavLink to={`/gallery/${gallery}/${gallery}${currentPos - 1}`}>
      {strings.prev}
    </NavLink>
  );
};

export default Prev;
