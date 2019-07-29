import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import strings from '../../constants/strings';
import { StyledGallery } from './styled';
import Image from '../Image/';

export default class Gallery extends PureComponent {
  static propTypes = {
    gallery: PropTypes.string.isRequired,
    published_at: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    data: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = { choices: [] };
  }
  componentDidMount() {
    this.setState({ choices: this.props });
  }

  render() {
    const { gallery, url } = this.props;

    return (
      <StyledGallery>
        <figure>
          <Image src={url} alt={gallery} />
          <figcaption>
            <h3>{gallery}</h3>
          </figcaption>
        </figure>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
        <a href={'/'}>{strings.open}</a>
      </StyledGallery>
    );
  }
}
