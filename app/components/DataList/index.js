import React from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
import styled from 'styled-components';
import { List, Icon } from 'antd';

const StyledList = styled(List)`
  .ant-list-item {
    padding-left: 12px;
    padding-right: 12px;
  }
`;

function DataList(props) {
  const spinnerProps = {
    spinning: props.isLoading,
    indicator: <Icon type="loading" spin />,
    tip: 'Loading',
  };

  const listProps = R.omit(['isLoading'], props);

  return <StyledList loading={spinnerProps} {...listProps} />;
}

DataList.propTypes = {
  dataSource: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
};

export default DataList;
