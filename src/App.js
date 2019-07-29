import React, { Fragment } from 'react';
import Galleries from './containers/Galleries';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import GalleryDetails from './containers/GalleryDetails';

const App = () => {
  return (
    <Router>
      <Fragment>
        <div className="App">
          <Route
            path="/"
            exact
            render={routeProps => <Galleries {...routeProps} />}
          />
          <Route
            path="/gallery/:name"
            exact
            render={routeProps => <GalleryDetails {...routeProps} />}
          />
        </div>
      </Fragment>
    </Router>
  );
};

function mapStateToProps({ galleries }) {
  return {
    loading: galleries === null,
  };
}

export default connect(mapStateToProps)(App);
