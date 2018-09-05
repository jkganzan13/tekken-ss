/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';

import { Layout } from 'antd';

import HomePage from 'containers/HomePage/Loadable';
import Combos from 'containers/Combos';
import MoveList from 'containers/MoveList';
import AppNav from 'components/AppNav';
import { firebaseConnect } from 'react-redux-firebase';
import { makeIsLoggedIn, makeSelectFirebaseProfile } from 'common/selectors';

function App(props) {
  return (
    <Layout>
      <AppNav
        firebase={props.firebase}
        isLoggedIn={props.isLoggedIn}
        profile={props.profile}
        location={props.location}
      />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/combos" component={Combos} />
        <Route exact path="/moves" component={MoveList} />
        <Route component={HomePage} />
      </Switch>
    </Layout>
  );
}

App.propTypes = {
  firebase: PropTypes.shape({
    login: PropTypes.func.isRequired,
  }),
  isLoggedIn: PropTypes.bool,
  profile: PropTypes.object,
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  isLoggedIn: makeIsLoggedIn(),
  profile: makeSelectFirebaseProfile(),
});

export default compose(
  withRouter,
  connect(mapStateToProps),
  firebaseConnect(),
)(App);
