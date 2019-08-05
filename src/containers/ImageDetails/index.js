import React from 'react';
import PropTypes from 'prop-types';
import EmptyResults from '../../components/EmptyResults';
import Loading from '../../components/Loading';
import Image from '../../components/Image';
import Prev from '../../components/Prev';
import Next from '../../components/Next';
import { fetchImageDetails } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyledImageDetails, ImageDetailsWrapper } from './styled';

class ImageDetails extends React.PureComponent {
  static propTypes = {
    imageDetails: PropTypes.object,
    fetchImageDetails: PropTypes.func,
  };

  async update(match) {
    this.props.fetchImageDetails(match.params.name);
  }

  componentDidMount() {
    if (this.props.match) {
      const { match } = this.props;
      this.update(match);
    }
  }

  render() {
    console.log('TCL: ImageDetails -> render -> this.props', this.props);
    const imageDetails = this.props.data;

    if (!imageDetails || !imageDetails.data) {
      return <Loading />;
    } else {
      const imageDetailsData = imageDetails.data ? imageDetails.data : [];

      const selectedImageDetails = imageDetailsData.filter(
        d => d.name === this.props.match.params.name,
      );

      if (!selectedImageDetails[0]) {
        return <EmptyResults />;
      }

      if (selectedImageDetails[0]) {
        const { name } = selectedImageDetails[0];
        return (
          <ImageDetailsWrapper>
            <Prev
              gallery={this.props.match.params.galleryname}
              currentImage={name}
            />
            <StyledImageDetails>
              <Image src={name} alt={name} />
              <h3>{name}</h3>
            </StyledImageDetails>
            <Next
              gallery={this.props.match.params.galleryname}
              currentImage={name}
            />
          </ImageDetailsWrapper>
        );
      } else return null;
    }
  }
}

export default connect(
  ({ fetchImageDetails: data }) => ({
    data,
  }),
  dispatch =>
    bindActionCreators(
      {
        fetchImageDetails,
      },
      dispatch,
    ),
)(ImageDetails);
