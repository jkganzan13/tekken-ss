/**
 *
 * Banner
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';
import img from 'images/logo.png';
import ROUTES from 'constants/routes';
import { isLoggedIn } from 'utils/auth';
import NavLink from './NavLink';
import * as Styled from './Styled';
import AccountMenu from './AccountMenu';
import AuthButtons from './AuthButtons';

function AppNav(props) {
  const loggedIn = isLoggedIn(props.auth);

  return (
    <Navbar>
      <Styled.Logo src={img} />
      <Nav>
        {ROUTES.map(route => (
          <NavLink key={route.name} location={props.location} {...route} />
        ))}
      </Nav>
      <Styled.StyledNav pullRight>
        {loggedIn ? (
          <AccountMenu
            onLogout={props.firebase.logout}
            profile={props.profile}
          />
        ) : (
          <AuthButtons onLogin={props.firebase.login} />
        )}
      </Styled.StyledNav>
    </Navbar>
  );
}

AppNav.propTypes = {
  firebase: PropTypes.shape({
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
  }),
  auth: PropTypes.object,
  profile: PropTypes.object,
  location: PropTypes.object,
};

export default AppNav;
