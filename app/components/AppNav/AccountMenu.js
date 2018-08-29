import React from 'react';
import PropTypes from 'prop-types';
import { NavDropdown, MenuItem, Image } from 'react-bootstrap';

const Avatar = ({ size, src }) => (
  <Image width={size} height={size} src={src} circle />
);

const AccountMenu = ({ onLogout, profile }) => (
  <NavDropdown
    id="account-menu"
    eventKey={9}
    title={<Avatar src={profile.avatarUrl} size={30} />}
  >
    <MenuItem eventKey={9.1} onClick={onLogout}>
      Logout
    </MenuItem>
  </NavDropdown>
);

AccountMenu.propTypes = {
  onLogout: PropTypes.func,
  profile: PropTypes.object,
};

export default AccountMenu;
