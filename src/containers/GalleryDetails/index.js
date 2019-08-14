import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import GalleryDetail from '../../components/GalleryDetail/';
import Hero from '../../components/Hero/';
import Footer from '../../components/Footer/';
import EmptyResults from '../../components/EmptyResults';
import Loading from '../../components/Loading';
import { fetchGalleryDetails } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyledGalleryDetails, StyledGalleryDetailsGrid } from './styled';

class GalleryDetails extends React.PureComponent {
  static propTypes = {
    galleryDetails: PropTypes.object,
    fetchGalleryDetails: PropTypes.func,
  };

  async update(match) {
    this.props.fetchGalleryDetails(match.params.name);
  }

  componentDidMount() {
    if (this.props.match) {
      const { match } = this.props;
      this.update(match);
    }
  }

  render() {
    const galleryDetails = this.props.data;
    const galleryName = this.props.match.params.name;

    if (!galleryDetails || !galleryDetails.data) {
      return <Loading />;
    } else {
      const galleryDetailsData = galleryDetails.data.filter(
        g => g.name.toLowerCase() === galleryName,
      );

      if (galleryDetailsData.length === 0) {
        return <EmptyResults />;
      }

      return (
        <Fragment>
          <Hero galleryName={galleryName} />
          <StyledGalleryDetails>
            <StyledGalleryDetailsGrid>
              {galleryDetailsData.map((q, index) => {
                if (q.name.toLowerCase() === galleryName) {
                  return Object.values(q.images).map((im, k) => (
                    <GalleryDetail
                      key={k}
                      image={im}
                      name={q.name.toLowerCase()}
                    />
                  ));
                } else return null;
              })}
            </StyledGalleryDetailsGrid>
          </StyledGalleryDetails>
          <Footer />
        </Fragment>
      );
    }
  }
}

export default connect(
  ({ fetchGalleryDetails: data }) => ({
    data,
  }),
  dispatch =>
    bindActionCreators(
      {
        fetchGalleryDetails,
      },
      dispatch,
    ),
)(GalleryDetails);
