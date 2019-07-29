import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import GalleryDetail from '../../components/GalleryDetail/';
import EmptyResults from '../../components/EmptyResults';
import Loading from '../../components/Loading';
import { fetchGalleryDetails } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyledGalleryDetails, StyledGalleryDetailsGrid } from './styled';

class GalleryDetails extends React.PureComponent {
  static propTypes = {
    GallerieDetails: PropTypes.object,
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
    console.log(
      'TCL: GallerieDetails -> render -> this.props.data',
      this.props,
    );

    if (!galleryDetails || !galleryDetails.data) {
      return <Loading />;
    } else {
      const galleryDetailsData = galleryDetails.data ? galleryDetails.data : [];

      if (galleryDetailsData.length === 0) {
        return <EmptyResults />;
      }

      return (
        <Fragment>
          <StyledGalleryDetails>
            <StyledGalleryDetailsGrid>
              {galleryDetailsData.map((q, index) => {
                if (q.name.toLowerCase() === this.props.match.params.name) {
                  return <GalleryDetail key={index} {...q} />;
                } else return null;
              })}
            </StyledGalleryDetailsGrid>
          </StyledGalleryDetails>
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
