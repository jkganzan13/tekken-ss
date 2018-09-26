import React from 'react';
import PropTypes from 'prop-types';
import logo from 'images/logo.png';
import ROUTES from 'constants/routes';
import * as Styled from './Styled';

const DesktopNav = () => (
  <Styled.Container>
    <Styled.Logo src={logo} />
    <Styled.NavContainer>
      {ROUTES.map(route => (
        <Styled.NavLink key={route.name} to={route.to}>
          {route.name}
        </Styled.NavLink>
      ))}
    </Styled.NavContainer>
  </Styled.Container>
);

DesktopNav.propTypes = {};

export default DesktopNav;
