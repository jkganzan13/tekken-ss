import React from 'react';
import PropTypes from 'prop-types';
import WithResponsive from 'hocs/WithResponsive';
import * as Styled from './Styled';
import Pager from './Pager';
import MobileButtons from './MobileButtons';

const List = props => (
  <Styled.Container>
    {props.renderFilter && props.renderFilter()}
    <Styled.ItemsContainer>
      {props.renderForm()}
      <MobileButtons {...props} />
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
  renderForm: PropTypes.func,
  renderFilter: PropTypes.func,
  toggleFilter: PropTypes.func,
};

export default WithResponsive(List);
