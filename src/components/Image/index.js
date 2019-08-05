import React from 'react';
import PropTypes from 'prop-types';
import { OFFLINE } from '../../constants';
import images from '../../mockup/images';

const Image = ({ src, alt }) => {
  if (OFFLINE) {
    const sources = images.filter(i =>
      i.startsWith('/static/media/' + src.toLowerCase() + '.'),
    );
    src = sources[0];
  }
  return <img src={src} alt={alt} />;
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
