import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import makeAnimated from 'react-select/lib/animated';
import { LightGrey } from 'assets/styles/colors';

const styles = {
  control: (base, { selectProps }) => ({
    ...base,
    borderRadius: 0,
    border: 0,
    width: selectProps.width,
  }),
  menu: base => ({
    ...base,
    borderRadius: 0,
    marginTop: '0px',
  }),
  option: base => ({
    ...base,
    color: 'black',
  }),
  multiValue: base => ({
    ...base,
    background: LightGrey,
    color: 'black',
  }),
  multiValueRemove: base => ({
    ...base,
    cursor: 'pointer',
    ':hover': {
      background: LightGrey,
    },
  }),
};

const Select = props => (
  <ReactSelect
    closeMenuOnSelect={false}
    components={makeAnimated()}
    styles={styles}
    {...props}
  />
);

Select.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.array,
  isMulti: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.any,
};

export default Select;
