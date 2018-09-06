/**
 *
 * CharacterDropdown
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Select } from 'antd';
import { CHARACTER_NAMES } from 'constants/characters';

function CharacterDropdown(props) {
  return (
    <Select
      showSearch
      placeholder="Select a character"
      optionFilterProp="children"
      onChange={value => props.onChange({ target: { value } })}
      filterOption={(input, option) =>
        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {CHARACTER_NAMES.map(name => (
        <Select.Option key={name} value={name}>
          {name}
        </Select.Option>
      ))}
    </Select>
  );
}

CharacterDropdown.propTypes = {
  onChange: PropTypes.func,
};

export default CharacterDropdown;
