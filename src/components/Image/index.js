import React from 'react';
import { OFFLINE } from '../../constants';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/),
);

const Image = ({ src, alt }) => {
  if (OFFLINE) {
    const sources = images.filter(i =>
      i.startsWith('/static/media/' + src.toLowerCase() + '.'),
    );
    console.log('TCL: sources', sources);
    return <img src={sources[0]} alt={alt} />;
  } else return <img src={src} alt={alt} />;
};

export default Image;
