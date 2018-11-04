import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Styled';

const Pager = props => {
  const renderPages = () => {
    const numPages = props.total / props.limit;
    const toRender = [];
    const pageLimit = props.pageLimit || numPages;
    for (let p = 0; p < pageLimit; p++) {
      const pageNum = p + 1;
      toRender.push(
        <Styled.Page
          key={`page-${pageNum}`}
          onClick={() => props.onPaginate(pageNum)}
        >
          {pageNum}
        </Styled.Page>,
      );
    }
    if (props.pageLimit && props.pageLimit < numPages) {
      toRender.push(
        <Styled.Page
          key="page-next"
          //onclick currentPage + 1
          onClick={() => props.onPaginate('next')}
        >
          Next
        </Styled.Page>,
      );
    }
    return toRender;
  };
  return <Styled.Pager>{renderPages()}</Styled.Pager>;
};

Pager.propTypes = {
  limit: PropTypes.number,
  onPaginate: PropTypes.func,
  pageLimit: PropTypes.number,
  total: PropTypes.number,
};

export default Pager;
