import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { UncontrolledDropdown, DropdownMenu, DropdownItem } from 'reactstrap';
import { isAuthenticated } from 'common/auth';
import LoginButton from './LoginButton';
import * as Styled from './Styled';

const AccountMenu = ({ onLogout, history, picture }) => (
  <UncontrolledDropdown nav inNavbar>
    <Styled.StyledDropdownToggle nav caret>
      <Styled.StyledAvatar src={picture} size={30} />
    </Styled.StyledDropdownToggle>
    <DropdownMenu right>
      <Styled.StyledDropdownItem onClick={() => history.push('/me/combos')}>
        My Combos
      </Styled.StyledDropdownItem>
      <DropdownItem divider />
      <Styled.StyledDropdownItem onClick={onLogout}>
        Logout
      </Styled.StyledDropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
);

AccountMenu.propTypes = {
  onLogout: PropTypes.func,
  history: PropTypes.object,
  picture: PropTypes.string,
};

const NavMenu = props =>
  isAuthenticated() ? (
    <AccountMenu
      history={props.history}
      onLogout={props.onLogout}
      picture={props.profile.picture}
    />
  ) : (
    <Styled.LoginButtonContainer>
      <LoginButton onLogin={props.onLogin} />
    </Styled.LoginButtonContainer>
  );

NavMenu.propTypes = {
  profile: PropTypes.object,
  history: PropTypes.object,
  onLogin: PropTypes.func,
  onLogout: PropTypes.func,
};

export default withRouter(NavMenu);
