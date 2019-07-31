import React from 'react';
import strings from '../../constants/strings';

const Next = props => {
  const { gallery, currentImage } = props;
  const currentPos = +currentImage.replace(gallery, '');

  return (
    <a
      href={`/gallery/${gallery}/${gallery}${currentPos + 1}`}
      alt={currentImage}
    >
      {strings.next}
    </a>
  );
};

export default Next;
