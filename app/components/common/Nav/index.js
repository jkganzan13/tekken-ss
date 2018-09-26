import React from 'react';
import PropTypes from 'prop-types';
import { Mobile, Desktop } from 'components/common/Responsive';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import * as Styled from './Styled';

const Nav = () => (
  <div>
    <Desktop>
      <DesktopNav />
    </Desktop>
    <Mobile>
      <MobileNav />
    </Mobile>
  </div>
);

Nav.propTypes = {};

export default Nav;
