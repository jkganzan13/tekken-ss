import React from 'react';
import PropTypes from 'prop-types';
import WithResponsive from 'hocs/WithResponsive';
import * as Styled from './Styled';
import Pager from './Pager';
import MobileButtons from './MobileButtons';

const List = props => (
  <Styled.Container className="list">
    {props.renderFilter && props.renderFilter()}
    {props.renderHeader && props.renderHeader()}
    <Styled.ItemsContainer className="items">
      {props.renderForm && props.renderForm()}
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
  renderHeader: PropTypes.func,
  renderItem: PropTypes.func,
  renderForm: PropTypes.func,
  renderFilter: PropTypes.func,
  toggleFilter: PropTypes.func,
};

export default WithResponsive(List);
