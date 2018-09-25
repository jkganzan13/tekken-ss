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
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';
import { Layout } from 'antd';
import injectReducer from 'utils/injectReducer';
import {
  onAuthenticated,
  login,
  logout,
  isAuthenticated,
  getProfileFromToken,
} from 'common/auth';
import { selectProfile } from 'common/selectors';
import HomePage from 'containers/HomePage/Loadable';
import Combos from 'containers/Combos';
import MoveList from 'containers/MoveList';
import AppNav from 'components/AppNav';
import reducer from './reducer';
import * as actions from './actions';

/* eslint-disable react/prefer-stateless-function */
class App extends React.PureComponent {
  componentDidMount() {
    const profilePromise = isAuthenticated()
      ? getProfileFromToken()
      : onAuthenticated();
    profilePromise.then(this.props.actions.updateProfile);
  }

  login = () => login();

  logout = () => {
    logout();
    this.props.actions.updateProfile({});
  };

  render() {
    const { props } = this;
    return (
      <Layout>
        <AppNav
          profile={props.profile}
          location={props.location}
          onLogin={this.login}
          onLogout={this.logout}
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
}

App.propTypes = {
  actions: PropTypes.object,
  profile: PropTypes.object,
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  profile: selectProfile,
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

const withReducer = injectReducer({ key: 'app', reducer });

export default compose(
  withRouter,
  withReducer,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(App);
