import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Menu, Avatar, Icon } from 'antd';
import { isAuthenticated } from 'common/auth';
import { AnchorButton } from 'common/Styled';
import * as Styled from './Styled';

const LoginButton = ({ onLogin }) => (
  <AnchorButton onClick={onLogin}>Login</AnchorButton>
);

LoginButton.propTypes = {
  onLogin: PropTypes.func,
};

const AccountMenu = ({ onLogout, history }) => (
  <Menu>
    <Menu.Item key="my-combos" onClick={() => history.push('/me/combos')}>
      My Combos
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="logout" onClick={onLogout}>
      Logout
    </Menu.Item>
  </Menu>
);

AccountMenu.propTypes = {
  onLogout: PropTypes.func,
  history: PropTypes.object,
};

const NavMenu = props => {
  return isAuthenticated() ? (
    <Styled.StyledNavDropdown
      overlay={
        <AccountMenu history={props.history} onLogout={props.onLogout} />
      }
    >
      <span>
        <Avatar src={props.profile.picture} size={30} /> <Icon type="down" />
      </span>
    </Styled.StyledNavDropdown>
  ) : (
    <LoginButton onLogin={props.onLogin} />
  );
};

NavMenu.propTypes = {
  profile: PropTypes.object,
  history: PropTypes.object,
  onLogin: PropTypes.func,
  onLogout: PropTypes.func,
};

export default withRouter(NavMenu);
