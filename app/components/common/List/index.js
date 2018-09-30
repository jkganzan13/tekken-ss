import React from 'react';
import PropTypes from 'prop-types';
import Pager from './Pager';
import * as Styled from './Styled';

const List = props => (
  <Styled.Container>
    {props.renderFilter && props.renderFilter()}
    <Styled.ItemsContainer>
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
};

export default List;
