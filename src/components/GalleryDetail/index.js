import React, { PureComponent } from 'react';
import { StyledGalleryDetail } from './styled';
import Image from '../Image';

export default class GalleryDetail extends PureComponent {
  render() {
    const { image, name } = this.props;
    return (
      <StyledGalleryDetail>
        <figure>
          <Image src={image} alt={image} />
          <figcaption>
            <a href={`/gallery/${name}/${image}`}>
              <h3>{name + ' ' + image}</h3>
            </a>
          </figcaption>
        </figure>
      </StyledGalleryDetail>
    );
  }
}
