import React from 'react';
import PropTypes from 'prop-types';
import { StyledGalleryDetail } from './styled';
import Image from '../Image';
import { NavLink, Route } from 'react-router-dom';

const GalleryDetail = props => {
  const { image, name } = props;
  const {
    name: imageName,
    description: imageDescription,
    location: imageLocation,
    published_at: imagePublishedAt,
    hash,
  } = image;

  const imageUrl = `/gallery/${name}/${imageName}`;

  return (
    <Route
      render={({ history }) => (
        <StyledGalleryDetail onClick={() => history.push(imageUrl)}>
          <figure>
            <Image src={hash} alt={imageName} />
            <figcaption>
              <NavLink to={imageUrl}>
                <h3>{`${imageDescription} (${imageLocation}${imagePublishedAt})`}</h3>
              </NavLink>
            </figcaption>
          </figure>
        </StyledGalleryDetail>
      )}
    />
  );
};

GalleryDetail.propTypes = {
  image: PropTypes.object,
  name: PropTypes.string,
  description: PropTypes.string.isRequired,
  location: PropTypes.string,
  published_at: PropTypes.string,
};

export default GalleryDetail;
