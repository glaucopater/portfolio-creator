import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import GalleryDetail from '../../components/GalleryDetail/';
import Hero from '../../components/Hero/';
import Footer from '../../components/Footer/';
import EmptyResults from '../../components/EmptyResults';
import Loading from '../../components/Loading';
import { fetchGalleryDetails } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyledGalleries, StyledGalleriesGrid } from '../common/styled';

const GalleryDetails = props => {
  const [data, setData] = useState([]);
  const { match, fetchGalleryDetails } = props;
  const galleryName = match.params.name;

  useEffect(() => {
    const fetchData = async () => {
      if (match) {
        const result = await fetchGalleryDetails(galleryName);
        setData(result.data.galleryDetails);
      }
    };
    fetchData();
  }, [fetchGalleryDetails, match, galleryName]);

  if (!data) {
    return <Loading />;
  }

  const galleryDetailsData = data.filter(
    g => g.name.toLowerCase() === galleryName,
  );

  if (galleryDetailsData.length === 0) {
    return <EmptyResults />;
  }

  return (
    <Fragment>
      <Hero galleryName={galleryName} />
      <StyledGalleries>
        <StyledGalleriesGrid>
          {galleryDetailsData.map((q, index) => {
            if (q.name.toLowerCase() === galleryName) {
              return Object.values(q.images).map((im, k) => (
                <GalleryDetail
                  key={k}
                  image={im}
                  description=""
                  name={q.name.toLowerCase()}
                />
              ));
            } else return null;
          })}
        </StyledGalleriesGrid>
      </StyledGalleries>
      <Footer />
    </Fragment>
  );
};

GalleryDetails.propTypes = {
  galleryDetails: PropTypes.object,
  fetchGalleryDetails: PropTypes.func,
};

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
