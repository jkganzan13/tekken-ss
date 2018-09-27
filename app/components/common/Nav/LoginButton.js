import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Styled';

const LoginButton = ({ onLogin }) => (
  <Styled.StyledNavLink onClick={onLogin} href="javascript:void(0)">
    Login
  </Styled.StyledNavLink>
);

LoginButton.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginButton;
