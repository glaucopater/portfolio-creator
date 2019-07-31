import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyledGallery } from './styled';
import Image from '../Image/';

export default class Gallery extends PureComponent {
  static propTypes = {
    gallery: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };

  render() {
    const { gallery, url } = this.props;

    return (
      <StyledGallery>
        <figure>
          <Image src={url} alt={gallery} />
          <figcaption>
            <h3>
              <a href={`/gallery/${url}`}>{gallery}</a>
            </h3>
          </figcaption>
        </figure>
      </StyledGallery>
    );
  }
}
