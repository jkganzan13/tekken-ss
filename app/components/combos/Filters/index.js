import React from 'react';
import PropTypes from 'prop-types';
import WithResponsive from 'hocs/WithResponsive';
import { Primary, Transparent } from 'components/common/Buttons';
import * as Styled from './Styled';
import FilterItem from './FilterItem';
import { getLabelValuesFromNames } from './util';

const Filters = props => {
  const Wrapper = props.isDesktop ? Styled.Filter : Styled.MobileFilter;

  const closeFilterAndCall = fn => () => {
    if (!props.isDesktop) props.closeFilters();
    fn();
  };

  return (
    <Wrapper>
      {!props.isDesktop && (
        <Styled.CloseBtn onClick={props.closeFilters} size={40} />
      )}
      <Styled.FilterTitleContainer>
        <Styled.FilterTitle>FILTERS</Styled.FilterTitle>
        <Transparent onClick={closeFilterAndCall(props.clearFilters)}>
          Clear
        </Transparent>
      </Styled.FilterTitleContainer>
      <FilterItem
        label="Name"
        filterKey="name"
        type="multiselect"
        value={getLabelValuesFromNames(props.filters.name)}
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
      <Primary onClick={closeFilterAndCall(props.onSubmit)}>Filter</Primary>
    </Wrapper>
  );
};

Filters.propTypes = {
  filters: PropTypes.object,
  isDesktop: PropTypes.bool,
  onFilterChange: PropTypes.func,
  onSubmit: PropTypes.func,
  closeFilters: PropTypes.func,
  clearFilters: PropTypes.func,
};

export default WithResponsive(Filters);
