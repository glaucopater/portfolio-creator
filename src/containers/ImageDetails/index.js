import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import EmptyResults from '../../components/EmptyResults';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer/';
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
    window.addEventListener('keydown', this.handleKeyPress);
    if (this.props.match) {
      const { match } = this.props;
      this.update(match);
    }
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = event => {
    this.navigateTo(event.keyCode);
  };

  navigateTo = direction => {
    let where;
    if (direction === 39) {
      where = 1;
    } else if (direction === 37) {
      where = -1;
    }
    const gallery = this.props.match.params.galleryname;
    const imageDetailsData = this.props.data.data.filter(
      d => d.name.lastIndexOf(gallery) !== -1,
    );
    const selectedImageDetails = imageDetailsData.filter(
      d => d.name === this.props.match.params.name,
    );
    const { name: currentImage } = selectedImageDetails[0];
    const currentPos = +currentImage.replace(gallery, '');
    if (where === 1 && currentPos < imageDetailsData.length) {
      this.props.history.push(
        `/gallery/${gallery}/${gallery}${currentPos + +where}`,
      );
    } else if (where < 0 && currentPos !== 1) {
      this.props.history.push(
        `/gallery/${gallery}/${gallery}${currentPos + +where}`,
      );
    }
  };

  render() {
    const imageDetails = this.props.data;

    if (!imageDetails || !imageDetails.data) {
      return <Loading />;
    } else {
      const imageDetailsData = this.props.data.data.filter(
        d => d.name.lastIndexOf(this.props.match.params.galleryname) !== -1,
      );

      const selectedImageDetails = imageDetailsData[0].images.filter(
        d => d.name === this.props.match.params.name,
      );

      if (!selectedImageDetails[0]) {
        return <EmptyResults />;
      }

      if (selectedImageDetails) {
        const { name, description, hash } = selectedImageDetails[0];
        const galleryName = this.props.match.params.galleryname;
        return (
          <Fragment>
            <Hero galleryName={galleryName} imageName={name} />
            <ImageDetailsWrapper>
              <Prev
                gallery={galleryName}
                currentImage={name}
                imagesCount={imageDetails.length}
              />
              <StyledImageDetails>
                <Image src={hash} alt={name} />
                <h3>{description}</h3>
              </StyledImageDetails>
              <Next
                gallery={galleryName}
                currentImage={name}
                imagesCount={imageDetailsData.length}
              />
            </ImageDetailsWrapper>
            <Footer />
          </Fragment>
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
