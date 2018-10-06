import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import makeAnimated from 'react-select/lib/animated';
import { CHARACTER_NAMES } from 'constants/characters';
import { LightGrey } from 'assets/styles/colors';
import { getLabelValuesFromNames } from './util';

const CHARACTER_OPTIONS = getLabelValuesFromNames(CHARACTER_NAMES);

const getValues = items => items.map(i => i.value);

const styles = {
  control: base => ({
    ...base,
    borderRadius: 0,
    border: 0,
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
    options={CHARACTER_OPTIONS}
    onChange={values => props.onChange(getValues(values))}
    placeholder="Select Character"
    styles={styles}
    value={props.value}
    isMulti
  />
);

Select.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.any,
};

export default Select;
