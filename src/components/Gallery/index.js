import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyledGallery } from './styled';
import Image from '../Image/';
import { NavLink, Route } from 'react-router-dom';

export default class Gallery extends PureComponent {
  static propTypes = {
    gallery: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };

  render() {
    const { gallery, url } = this.props;
    const galleryUrl = `/gallery/${url}`;
    return (
      <Route
        render={({ history }) => (
          <StyledGallery onClick={() => history.push(galleryUrl)}>
            <figure>
              <Image src={url} alt={gallery} />
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
  }
}
