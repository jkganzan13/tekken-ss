/**
 *
 * Filters
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import CharacterDropdown from 'components/CharacterDropdown';
import * as Styled from './Styled';

const Filters = props => (
  <Styled.StyledHeader>
    <span>Filters:</span>
    <CharacterDropdown
      mode="multiple"
      value={props.filters.characters}
      onChange={e =>
        props.onChange({ key: 'characters', value: e.target.value })
      }
    />
    <Input
      value={props.filters.combo}
      placeholder="Combo"
      onChange={e => props.onChange({ key: 'combo', value: e.target.value })}
    />
  </Styled.StyledHeader>
);

Filters.propTypes = {
  onChange: PropTypes.func,
  filters: PropTypes.object,
};

export default Filters;
