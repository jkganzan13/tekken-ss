import React from 'react';
import PropTypes from 'prop-types';
import { NavDropdown, MenuItem, Image } from 'react-bootstrap';
import { withRouter } from 'react-router';

const Avatar = ({ size, src }) => (
  <Image width={size} height={size} src={src} circle />
);

const AccountMenu = ({ onLogout, profile, history }) => (
  <NavDropdown
    id="account-menu"
    title={<Avatar src={profile.avatarUrl} size={30} />}
  >
    <MenuItem onClick={() => history.push('/me/combos')}>My Combos</MenuItem>
    <MenuItem onClick={onLogout}>Logout</MenuItem>
  </NavDropdown>
);

AccountMenu.propTypes = {
  onLogout: PropTypes.func,
  profile: PropTypes.object,
  history: PropTypes.object,
};

export default withRouter(AccountMenu);
