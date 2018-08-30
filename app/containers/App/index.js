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

import HomePage from 'containers/HomePage/Loadable';
import Sidestep from 'containers/Sidestep';
import Combos from 'containers/Combos';
import AppNav from 'components/AppNav';
import { firebaseConnect } from 'react-redux-firebase';
import { makeSelectFirebaseAuth, makeSelectFirebaseProfile } from './selectors';

function App(props) {
  return (
    <div>
      <AppNav
        firebase={props.firebase}
        auth={props.auth}
        profile={props.profile}
        location={props.location}
      />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/ss" component={Sidestep} />
        <Route exact path="/combos" component={Combos} />
        <Route component={HomePage} />
      </Switch>
    </div>
  );
}

App.propTypes = {
  firebase: PropTypes.shape({
    login: PropTypes.func.isRequired,
  }),
  auth: PropTypes.object,
  profile: PropTypes.object,
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  auth: makeSelectFirebaseAuth(),
  profile: makeSelectFirebaseProfile(),
});

export default compose(
  withRouter,
  connect(mapStateToProps),
  firebaseConnect(),
)(App);
