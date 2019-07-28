import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import strings from '../../constants/strings';
export default class Gallery extends PureComponent {
  static propTypes = {
    gallery: PropTypes.string.isRequired,
    published_at: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    choices: PropTypes.array.isRequired,
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
    console.log('TCL: Gallery -> render ->  this.props', this.props);

    return (
      <li className="Gallery">
        <p>{gallery}</p>
        <a href={url}>{strings.open}</a>
      </li>
    );
  }
}
