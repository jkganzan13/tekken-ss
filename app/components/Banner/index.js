/**
 *
 * Banner
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import * as Styled from './Styled';
import img from 'images/logo.png';

function Banner() {
  return (
    <Styled.Container>
      <img src={img} />
    </Styled.Container>
  );
}

Banner.propTypes = {};

export default Banner;
