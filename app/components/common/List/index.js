import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Styled';

const List = props => (
  <Styled.Container>{props.dataSource.map(props.renderItem)}</Styled.Container>
);

List.propTypes = {
  dataSource: PropTypes.array,
  isLoading: PropTypes.bool,
  renderItem: PropTypes.func,
};

export default List;
