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
// import AppNav from 'components/AppNav';
import AppNav from 'components/common/Nav';
import * as comboActions from 'containers/Combos/actions';
import reducer from './reducer';
import * as appActions from './actions';
import * as Styled from './Styled';

/* eslint-disable react/prefer-stateless-function */
class App extends React.PureComponent {
  componentDidMount() {
    const profilePromise = isAuthenticated()
      ? getProfileFromToken()
      : onAuthenticated();
    profilePromise.then(profile => {
      this.props.actions.updateProfile(profile);
      this.props.actions.queryCombos();
    });
  }

  login = () => login();

  logout = () => {
    logout();
    this.props.actions.updateProfile({});
  };

  render() {
    return (
      <Styled.Container>
        <AppNav
          profile={this.props.profile}
          location={this.props.location}
          onLogin={this.login}
          onLogout={this.logout}
        />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/combos" component={Combos} />
          <Route exact path="/moves" component={MoveList} />
          <Route component={HomePage} />
        </Switch>
      </Styled.Container>
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
    actions: bindActionCreators(
      {
        ...appActions,
        ...comboActions,
      },
      dispatch,
    ),
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
