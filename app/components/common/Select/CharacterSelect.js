import React from 'react';
import PropTypes from 'prop-types';
import { CHARACTER_NAMES } from 'constants/characters';
import Select from './';

const CHARACTER_OPTIONS = CHARACTER_NAMES.map(name => ({
  label: name,
  value: name,
}));

const getValues = value =>
  Array.isArray(value) ? value.map(i => i.value) : value.value;

const CharacterSelect = props => (
  <Select
    options={CHARACTER_OPTIONS}
    onChange={values => props.onChange(getValues(values))}
    placeholder="Select Character"
    {...props}
  />
);

CharacterSelect.propTypes = {
  onChange: PropTypes.func,
  closeMenuOnSelect: PropTypes.bool,
  isMulti: PropTypes.bool,
  value: PropTypes.any,
};

CharacterSelect.defaultProps = {
  closeMenuOnSelect: false,
  isMulti: true,
};

export default CharacterSelect;
