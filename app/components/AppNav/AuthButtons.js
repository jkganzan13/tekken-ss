import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import { NavItem } from 'react-bootstrap';

const AuthButtons = ({ onLogin }) => [
  <NavItem
    key={uuidv4()}
    onClick={() => onLogin({ provider: 'google', type: 'popup' })}
  >
    G
  </NavItem>,
  <NavItem
    key={uuidv4()}
    onClick={() => onLogin({ provider: 'facebook', type: 'popup' })}
  >
    F
  </NavItem>,
];

AuthButtons.propTypes = {
  onLogout: PropTypes.func,
};

export default AuthButtons;
