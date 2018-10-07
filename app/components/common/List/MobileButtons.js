import React from 'react';
import PropTypes from 'prop-types';
import { Mobile } from 'components/common/Responsive';
import { FiFilter, FiPlus } from 'react-icons/fi';
import * as Styled from './Styled';

/* eslint-disable react/prop-types */
const IconBtn = ({ Icon, label, onClick }) => (
  <Styled.IconBtn onClick={onClick}>
    <Icon /> {label}
  </Styled.IconBtn>
);
/* eslint-enable */

const MobileButtons = props => (
  <Mobile component={Styled.MobileBtnsContainer}>
    {props.renderFilter && (
      <IconBtn onClick={props.toggleFilter} Icon={FiFilter} label="Filters" />
    )}
    {props.renderForm && (
      <IconBtn onClick={props.toggleForm} Icon={FiPlus} label="Submit" />
    )}
  </Mobile>
);

MobileButtons.propTypes = {
  renderFilter: PropTypes.func,
  renderForm: PropTypes.func,
  toggleFilter: PropTypes.func,
  toggleForm: PropTypes.func,
};

export default MobileButtons;
