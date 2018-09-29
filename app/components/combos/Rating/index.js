/**
 *
 * Rating
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './Styled';

function Rating({ disabled, isRated, onChange, value }) {
  return (
    <Styled.RatingContainer>
      {/* <Rate
        disabled={disabled}
        count={1}
        value={isRated ? 1 : 0}
        onChange={onChange}
        allowClear
      /> */}
      <Styled.Icon
        disabled={disabled}
        isRated={isRated}
        size="1.5em"
        onClick={() => onChange(!isRated)}
      />
      <Styled.Value>{value}</Styled.Value>
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
