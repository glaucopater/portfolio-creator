import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Gallery from '../../components/Gallery';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import EmptyResults from '../../components/EmptyResults';
import Loading from '../../components/Loading';
import { fetchGalleries } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyledGalleries, StyledGalleriesGrid } from '../common/styled';

const Galleries = props => {
  const { fetchGalleries } = props;
  const [galleriesData, setGalleriesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchGalleries();
      setGalleriesData(result.data.galleries);
    };
    fetchData();
  }, [fetchGalleries]);

  if (!galleriesData) {
    return <Loading />;
  } else {
    if (galleriesData.length === 0) {
      return <EmptyResults />;
    }

    return (
      <Fragment>
        <Hero />
        <StyledGalleries>
          <StyledGalleriesGrid>
            {galleriesData.map((q, index) => (
              <Gallery key={index} {...q} />
            ))}
          </StyledGalleriesGrid>
        </StyledGalleries>
        <Footer />
      </Fragment>
    );
  }
};

Galleries.propTypes = {
  Galleries: PropTypes.object,
  fetchGalleries: PropTypes.func,
};

export default connect(
  ({ fetchGalleries: data }) => ({
    data,
  }),
  dispatch =>
    bindActionCreators(
      {
        fetchGalleries,
      },
      dispatch,
    ),
)(Galleries);
