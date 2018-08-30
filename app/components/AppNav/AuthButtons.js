import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import { SocialIcon } from 'react-social-icons';
import * as Styled from './Styled';

const authButtons = [
  { provider: 'facebook', type: 'popup' },
  { provider: 'google', type: 'popup' },
  { provider: 'twitter', type: 'popup' },
];

const AuthButtons = ({ onLogin }) =>
  authButtons.map(btn => (
    <Styled.AuthButton
      role="presentation"
      key={uuidv4()}
      onClick={() => onLogin(btn)}
    >
      <SocialIcon network={btn.provider} style={{ width: 30, height: 30 }} />
    </Styled.AuthButton>
  ));

AuthButtons.propTypes = {
  onLogout: PropTypes.func,
};

export default AuthButtons;
