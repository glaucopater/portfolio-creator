import React from 'react';
import strings from '../../constants/strings';
import { NavLink } from 'react-router-dom';

const Next = ({ gallery, currentImage, imagesCount }) => {
  const currentPos = +currentImage.replace(gallery, '');

  if (currentPos === imagesCount) {
    return (
      <div style={{ padding: '0.5rem', color: '#FFF' }}>{strings.next}</div>
    );
  }
  return (
    <NavLink to={`/gallery/${gallery}/${gallery}${currentPos + 1}`}>
      {strings.next}
    </NavLink>
  );
};

export default Next;
