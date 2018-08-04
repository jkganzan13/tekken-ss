import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as Styled from './Styled';

const NavLink = ({ location, to, name }) => (
  <li className={location.pathname === to ? 'active' : ''}>
    <Link to={to}>{name}</Link>
  </li>
);

NavLink.propTypes = {
  location: PropTypes.object,
  to: PropTypes.string,
  name: PropTypes.string,
};

export default NavLink;
