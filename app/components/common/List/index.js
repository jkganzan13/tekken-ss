import React from 'react';
import PropTypes from 'prop-types';
import { FiFilter } from 'react-icons/fi';
import { Mobile } from 'components/common/Responsive';
import Pager from './Pager';
import * as Styled from './Styled';

const FilterButton = ({ onClick }) => (
  <Styled.FilterBtn onClick={onClick}>
    <FiFilter /> Filters
  </Styled.FilterBtn>
);

const List = props => (
  <Styled.Container>
    {props.renderFilter && props.renderFilter()}
    <Styled.ItemsContainer>
      <Mobile>
        {props.renderFilter && <FilterButton onClick={props.toggleFilter} />}
      </Mobile>
      {props.dataSource.map(props.renderItem)}
      {props.pagination && <Pager {...props.pagination} />}
    </Styled.ItemsContainer>
  </Styled.Container>
);

List.propTypes = {
  dataSource: PropTypes.array,
  isLoading: PropTypes.bool,
  onPaginate: PropTypes.func,
  pagination: PropTypes.object,
  renderItem: PropTypes.func,
  renderFilter: PropTypes.func,
  toggleFilter: PropTypes.func,
};

export default List;
