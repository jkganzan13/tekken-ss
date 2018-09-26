/**
 *
 * AppNav
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import img from 'images/logo.png';
import ROUTES from 'constants/routes';
import * as Styled from './Styled';
import NavMenu from './NavMenu';

function AppNav(props) {
  return (
    <Styled.StyledHeader>
      <Styled.Logo src={img} />
      <Styled.StyledMenu
        mode="horizontal"
        defaultSelectedKeys={[props.location.pathname]}
      >
        {ROUTES.map(route => (
          <Menu.Item key={route.to}>
            <Link to={route.to}>{route.name}</Link>
          </Menu.Item>
        ))}
        <NavMenu {...props} />
      </Styled.StyledMenu>
    </Styled.StyledHeader>
  );
}

AppNav.propTypes = {
  profile: PropTypes.object,
  location: PropTypes.object,
  onLogin: PropTypes.func,
  onLogout: PropTypes.func,
};

export default AppNav;
