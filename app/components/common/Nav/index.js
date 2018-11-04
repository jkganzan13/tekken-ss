import React from 'react';
import PropTypes from 'prop-types';
import { Mobile, Desktop } from 'components/common/Responsive';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Nav = props => (
  <div>
    <Desktop>
      <DesktopNav {...props} />
    </Desktop>
    <Mobile>
      <MobileNav {...props} />
    </Mobile>
  </div>
);

Nav.propTypes = {
  profile: PropTypes.object,
  location: PropTypes.object,
  onLogin: PropTypes.func,
  onLogout: PropTypes.func,
};

export default Nav;
