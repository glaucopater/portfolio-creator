import React from 'react';
import strings from '../../constants/strings';
import { NavLink } from 'react-router-dom';

const Next = ({ gallery, currentImage }) => {
  const currentPos = +currentImage.replace(gallery, '');
  return (
    <NavLink to={`/gallery/${gallery}/${gallery}${currentPos + 1}`}>
      {strings.next}
    </NavLink>
  );
};

export default Next;
