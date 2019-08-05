import React, { PureComponent } from 'react';
import { StyledGalleryDetail } from './styled';
import Image from '../Image';
import { NavLink } from 'react-router-dom';

export default class GalleryDetail extends PureComponent {
  render() {
    const { image, name } = this.props;
    return (
      <StyledGalleryDetail>
        <figure>
          <Image src={image} alt={image} />
          <figcaption>
            <NavLink to={`/gallery/${name}/${image}`}>
              <h3>{name + ' ' + image}</h3>
            </NavLink>
          </figcaption>
        </figure>
      </StyledGalleryDetail>
    );
  }
}
