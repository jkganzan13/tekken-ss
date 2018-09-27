import React from 'react';
import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { UncontrolledDropdown, DropdownMenu, DropdownItem } from 'reactstrap';
import logo from 'images/logo.png';
import ROUTES from 'constants/routes';
import { isAuthenticated } from 'common/auth';
import NavMenu from './NavMenu';
import LoginButton from './LoginButton';
import * as Styled from './Styled';

const renderLogin = ({ onLogin, onLogout }) =>
  isAuthenticated() ? (
    [
      <Link to="/me/combos">My Combos</Link>,
      <Styled.LoginButton onClick={onLogout}>Logout</Styled.LoginButton>,
    ]
  ) : (
    <LoginButton onLogin={onLogin} />
  );

const MobileNav = props => (
  <Styled.MobileNavContainer>
    <Styled.Logo src={logo} />
    <Menu right>
      {ROUTES.map(route => <Link to={route.to}>{route.name}</Link>)}
      <DropdownItem divider />
      {renderLogin(props)}
    </Menu>
  </Styled.MobileNavContainer>
);

MobileNav.propTypes = {
  profile: PropTypes.object,
  location: PropTypes.object,
  onLogin: PropTypes.func,
  onLogout: PropTypes.func,
};

export default MobileNav;
