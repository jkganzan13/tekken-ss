import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Menu, Avatar, Icon } from 'antd';
import * as Styled from './Styled';

const authButtons = [
  { provider: 'Facebook', type: 'popup' },
  { provider: 'Google', type: 'popup' },
  { provider: 'Twitter', type: 'popup' },
];

const LoginMenu = ({ onLogin }) => (
  <Menu>
    {authButtons.map(btn => (
      <Menu.Item key={btn.provider} onClick={() => onLogin(btn)}>
        <Icon type={btn.provider.toLowerCase()} theme="outlined" />
        {btn.provider}
      </Menu.Item>
    ))}
  </Menu>
);

LoginMenu.propTypes = {
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
  const overlay = props.isLoggedIn ? (
    <AccountMenu history={props.history} onLogout={props.firebase.logout} />
  ) : (
    <LoginMenu onLogin={props.firebase.login} />
  );

  return (
    <Styled.StyledNavDropdown overlay={overlay}>
      <span>
        {props.isLoggedIn ? (
          <Avatar src={props.profile.avatarUrl} size={30} />
        ) : (
          'Login'
        )}{' '}
        <Icon type="down" />
      </span>
    </Styled.StyledNavDropdown>
  );
};

NavMenu.propTypes = {
  firebase: PropTypes.shape({
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
  }),
  isLoggedIn: PropTypes.bool,
  profile: PropTypes.object,
  history: PropTypes.object,
};

export default withRouter(NavMenu);
