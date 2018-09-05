/**
 *
 * IconText
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Icon } from 'antd';

function IconText({ text, type }) {
  return (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );
}

IconText.propTypes = {
  text: PropTypes.node,
  type: PropTypes.string,
};

export default IconText;
