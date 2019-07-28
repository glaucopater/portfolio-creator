import React from 'react';
import PropTypes from 'prop-types';
import Gallery from '../../components/Gallery';
import Header from '../../components/Header';
import EmptyResults from '../../components/EmptyResults';
import Loading from '../../components/Loading';
import { fetchGalleries } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import strings from '../../constants/strings';
import { StyledGalleries, StyledGalleriesGrid } from './styled';

class Galleries extends React.PureComponent {
  static propTypes = {
    Galleries: PropTypes.object,
    fetchGalleries: PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.state = { Galleries: [] };
  }

  async update() {
    this.props.fetchGalleries();
  }

  componentDidMount() {
    this.update();
  }

  render() {
    const galleries = this.props.data;

    if (!galleries || !galleries.data) {
      return <Loading />;
    } else {
      const galleriesData = galleries.data ? galleries.data : [];

      if (galleriesData.length === 0) {
        return <EmptyResults />;
      }

      return (
        <StyledGalleries>
          {galleriesData.length > 0 && <Header title={strings.galleries} />}
          <StyledGalleriesGrid>
            {galleriesData.map((q, index) => (
              <Gallery key={index} {...q} />
            ))}
          </StyledGalleriesGrid>
        </StyledGalleries>
      );
    }
  }
}

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
