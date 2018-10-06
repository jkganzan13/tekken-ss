import React from 'react';
import PropTypes from 'prop-types';
import { Mobile } from 'components/common/Responsive';
import { FiFilter } from 'react-icons/fi';
import * as Styled from './Styled';

/* eslint-disable react/prop-types */
const FilterButton = ({ onClick }) => (
  <Styled.FilterBtn onClick={onClick}>
    <FiFilter /> Filters
  </Styled.FilterBtn>
);
/* eslint-enable */

const MobileButtons = props => (
  <Mobile>
    {props.renderFilter && <FilterButton onClick={props.toggleFilter} />}
  </Mobile>
);

MobileButtons.propTypes = {
  renderFilter: PropTypes.func,
  toggleFilter: PropTypes.func,
};

export default MobileButtons;
