import React from 'react';
import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import Divider from 'components/common/Divider';
import logo from 'images/logo.png';
import ROUTES from 'constants/routes';
import { isAuthenticated } from 'common/auth';
import LoginButton from './LoginButton';
import * as Styled from './Styled';

const MobileNav = props => {
  const LoggedInNav = isAuthenticated() ? (
    [
      <Link to="/me/combos">My Combos</Link>,
      <Styled.LoginButton onClick={props.onLogout}>Logout</Styled.LoginButton>,
    ]
  ) : (
    <LoginButton onLogin={props.onLogin} />
  );

  return (
    <Styled.MobileNavContainer>
      <Styled.Logo src={logo} />
      <Menu right>
        {ROUTES.map(route => <Link to={route.to}>{route.name}</Link>)}
        <Divider />
        {LoggedInNav}
      </Menu>
    </Styled.MobileNavContainer>
  );
};

MobileNav.propTypes = {
  onLogin: PropTypes.func,
  onLogout: PropTypes.func,
};

export default MobileNav;
