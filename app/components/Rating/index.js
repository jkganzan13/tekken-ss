/**
 *
 * Rating
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Rate } from 'antd';
import * as Styled from './Styled';

function Rating({ disabled, isRated, onChange, value }) {
  return (
    <Styled.RatingContainer>
      <Rate
        disabled={disabled}
        count={1}
        value={isRated ? 1 : 0}
        onChange={onChange}
        allowClear
      />
      <span>{value}</span>
    </Styled.RatingContainer>
  );
}

Rating.propTypes = {
  disabled: PropTypes.bool,
  isRated: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.node,
};

export default Rating;
