import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyledGalleryDetail } from './styled';
import Image from '../Image';
import { NavLink } from 'react-router-dom';

export default class GalleryDetail extends PureComponent {
  static propTypes = {
    image: PropTypes.object,
    name: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string,
    published_at: PropTypes.string,
  };

  render() {
    const { image, name } = this.props;
    const {
      name: imageName,
      description: imageDescription,
      location: imageLocation,
      published_at: imagePublishedAt,
    } = image;
    return (
      <StyledGalleryDetail>
        <figure>
          <Image src={imageName} alt={imageName} />
          <figcaption>
            <NavLink to={`/gallery/${name}/${imageName}`}>
              <h3>{`${imageDescription} (${imageLocation} ${imagePublishedAt})`}</h3>
            </NavLink>
          </figcaption>
        </figure>
      </StyledGalleryDetail>
    );
  }
}
