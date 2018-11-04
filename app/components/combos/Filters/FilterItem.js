import React from 'react';
import PropTypes from 'prop-types';
import Select from 'components/common/Select/CharacterSelect';
import * as Styled from './Styled';

const renderFilterByType = props => {
  switch (props.type) {
    case 'multiselect':
      return (
        <Select
          value={props.value}
          onChange={value =>
            props.onFilterChange({ key: props.filterKey, value })
          }
        />
      );
    default:
      return (
        <Styled.FilterInput
          type="text"
          value={props.value}
          onChange={e =>
            props.onFilterChange({
              key: props.filterKey,
              value: e.target.value,
            })
          }
        />
      );
  }
};

const FilterItem = props => (
  <Styled.FilterItem>
    <Styled.FilterHeader>{props.label}</Styled.FilterHeader>
    {renderFilterByType(props)}
  </Styled.FilterItem>
);

FilterItem.propTypes = {
  filterKey: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  onFilterChange: PropTypes.func,
  value: PropTypes.any,
};

export default FilterItem;
