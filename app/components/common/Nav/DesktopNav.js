import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavbarToggler,
} from 'reactstrap';
import logo from 'images/logo.png';
import ROUTES from 'constants/routes';
import * as Styled from './Styled';
import NavMenu from './NavMenu';

/* eslint-disable react/prefer-stateless-function */
class DesktopNav extends React.PureComponent {
  state = {
    isOpen: false,
  };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (
      <Navbar expand="md">
        <NavbarBrand>
          <Styled.Logo src={logo} />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {ROUTES.map(route => (
              <NavItem key={route.name}>
                <Styled.StyledNavLink tag={Link} key={route.to} {...route}>
                  {route.name}
                </Styled.StyledNavLink>
              </NavItem>
            ))}
            <NavMenu {...this.props} />
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

DesktopNav.propTypes = {
  profile: PropTypes.object,
  location: PropTypes.object,
  onLogin: PropTypes.func,
  onLogout: PropTypes.func,
};

export default DesktopNav;
