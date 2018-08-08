/**
 *
 * Banner
 *
 */

import React from 'react';
import { withRouter } from 'react-router';
import { Navbar, Nav } from 'react-bootstrap';
import img from 'images/logo.png';
import ROUTES from 'constants/routes';
import NavLink from './NavLink';
import * as Styled from './Styled';

function AppNav(props) {
  return (
    <Navbar>
      <Styled.Logo src={img} />
      <Nav>
        {ROUTES.map(route => (
          <NavLink key={route.name} {...props} {...route} />
        ))}
      </Nav>
    </Navbar>
  );
}

AppNav.propTypes = {};

export default withRouter(AppNav);
