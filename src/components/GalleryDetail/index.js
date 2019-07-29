import React, { PureComponent } from 'react';
import { StyledGalleryDetail } from './styled';
import Image from '../Image';

export default class GalleryDetail extends PureComponent {
  render() {
    const { images, name } = this.props;
    console.log('TCL: GalleryDetail -> render -> this.props', this.props);

    return (
      <StyledGalleryDetail>
        {images.map((image, index) => (
          <figure key={index}>
            <Image src={name + '' + (index + 1)} alt={image} />
            <figcaption>
              <h3>{image}</h3>
            </figcaption>
          </figure>
        ))}
      </StyledGalleryDetail>
    );
  }
}
