import React from 'react';
import PropTypes from 'prop-types';
import { Desktop } from 'components/common/Responsive';
import Select from './Select';
import * as Styled from './Styled';

const renderFilterByType = props => {
  switch (props.type) {
    case 'multiselect':
      return (
        <Select
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
  value: PropTypes.node,
};

const Filters = props => (
  <Desktop>
    <Styled.Filter>
      <Styled.FilterTitle>FILTERS</Styled.FilterTitle>
      <FilterItem
        label="Name"
        filterKey="name"
        type="multiselect"
        value={props.filters.name}
        onFilterChange={props.onFilterChange}
      />
      <FilterItem
        label="Combo"
        filterKey="combo"
        value={props.filters.combo}
        onFilterChange={props.onFilterChange}
      />
      <FilterItem
        label="Damage"
        filterKey="damage"
        value={props.filters.damage}
        onFilterChange={props.onFilterChange}
      />
      <Styled.Submit onClick={props.onSubmit}>Filter</Styled.Submit>
    </Styled.Filter>
  </Desktop>
);

Filters.propTypes = {
  filters: PropTypes.object,
  onFilterChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default Filters;
