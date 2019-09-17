import React from 'react';
import strings from '../../constants/strings';
import { NavLink } from 'react-router-dom';

const Prev = ({ gallery, currentImage, imagesCount }) => {
  const currentPos = +currentImage.replace(gallery, '');

  if (currentPos === 1) {
    return (
      <div style={{ padding: '0.5rem', color: '#FFF' }}>{strings.prev}</div>
    );
  }
  return (
    <NavLink to={`/gallery/${gallery}/${gallery}${currentPos - 1}`}>
      {strings.prev}
    </NavLink>
  );
};

export default Prev;
