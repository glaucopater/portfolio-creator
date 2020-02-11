import React from 'react';
import PropTypes from 'prop-types';
import { OFFLINE } from '../../constants';
import { StyledImg } from './styled';
import images from '../../mockup/output';
import Loader from 'react-loader-spinner';

const Image = ({ src, alt }) => {
  if (OFFLINE) {
    const sources = images.filter(i =>
      i.startsWith('/static/media/' + src.toLowerCase() + '.'),
    );
    src = sources[0];
  }

  return (
    <StyledImg
      src={src}
      alt={alt}
      onContextMenu={e => e.preventDefault()}
      onMouseDown={e => e.preventDefault()}
      loader={<Loader type="Puff" color="#00BFFF" height={100} width={100} />}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
