import React from 'react';
import PropTypes from 'prop-types';
import { StyledGallery } from './styled';
import Image from '../Image/';
import { NavLink, Route } from 'react-router-dom';

const Gallery = props => {
  const { gallery, url, cover } = props;
  const coverUrl = cover ? cover.hash : url;
  const galleryUrl = `/gallery/${url}`;
  return (
    <Route
      render={({ history }) => (
        <StyledGallery onClick={() => history.push(galleryUrl)}>
          <figure>
            <Image src={coverUrl} alt={gallery} />
            <figcaption>
              <h3>
                <NavLink to={galleryUrl}>{gallery}</NavLink>
              </h3>
            </figcaption>
          </figure>
        </StyledGallery>
      )}
    />
  );
};

Gallery.propTypes = {
  gallery: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export default Gallery;
