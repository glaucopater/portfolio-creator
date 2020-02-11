import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import EmptyResults from '../../components/EmptyResults';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer/';
import Loading from '../../components/Loading';
import Image from '../../components/Image';
import { fetchImageDetails } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyledImageDetailsWrapper } from './styled';
import Carousel from 'nuka-carousel';

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
    const LEFT_ARROW = 39;
    const RIGHT_ARROW = 37;

    if (direction === LEFT_ARROW || direction === RIGHT_ARROW) {
      const where = direction === LEFT_ARROW ? 1 : -1;
      const gallery = this.props.match.params.galleryname;
      const imageDetailsData = this.props.data.data.filter(
        d => d.name.lastIndexOf(gallery) !== -1,
      );

      const selectedImageDetails = imageDetailsData[0].images.filter(
        d => d.name === this.props.match.params.name,
      );

      const { name: currentImage } = selectedImageDetails[0];
      const currentPos = +currentImage.replace(gallery, '');
      if (where === 1 && currentPos < imageDetailsData[0].images.length - 1) {
        this.props.history.push(
          `/gallery/${gallery}/${gallery}${currentPos + +where}`,
        );
      } else if (where < 0 && currentPos !== 1) {
        this.props.history.push(
          `/gallery/${gallery}/${gallery}${currentPos + +where}`,
        );
      }
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

      if (selectedImageDetails && selectedImageDetails[0]) {
        const { name } = selectedImageDetails[0];
        const galleryName = this.props.match.params.galleryname;
        return (
          <Fragment>
            <Hero galleryName={galleryName} imageName={name} isSmall={true} />
            <StyledImageDetailsWrapper>
              <Carousel
                wrapAround
                enableKeyboardControls
                heightMode={'first'}
                renderBottomCenterControls={null}
              >
                {imageDetailsData[0].images.map((im, index) => (
                  <Image key={index.toString()} src={im.hash} alt={im.name} />
                ))}
              </Carousel>
            </StyledImageDetailsWrapper>
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
