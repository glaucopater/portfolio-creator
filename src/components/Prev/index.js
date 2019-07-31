import React from 'react';
import strings from '../../constants/strings';

const Prev = props => {
  const { gallery, currentImage } = props;
  const currentPos = +currentImage.replace(gallery, '');

  if (currentPos === 1) {
    return null;
  }
  return (
    <a
      href={`/gallery/${gallery}/${gallery}${currentPos - 1}`}
      alt={currentImage}
    >
      {strings.prev}
    </a>
  );
};

export default Prev;
