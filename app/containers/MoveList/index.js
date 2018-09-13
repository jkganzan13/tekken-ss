/**
 *
 * MoveList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import { Table, BackTop } from 'antd';
import uuidv4 from 'uuid/v4';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { CommonContainer } from 'common/Styled';
import CharacterSelect from 'components/CharacterSelect';
import * as Styled from './Styled';
import makeSelectMoveList from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';
import { moveListColumns } from './data';

/* eslint-disable react/prefer-stateless-function */
export class MoveList extends React.PureComponent {
  componentDidMount() {
    this.props.actions.loadMoveList();
  }

  componentDidUpdate() {
    if (this.props.moveList.selected && this.tableRef) {
      window.scrollTo({
        top: this.tableRef.offsetTop - 10,
        behavior: 'smooth',
      });
    }
  }

  render() {
    return (
      <CommonContainer>
        <BackTop />
        <CharacterSelect
          onSelect={this.props.actions.selectCharacter}
          selected={this.props.moveList.selected}
        />
        {this.props.moveList.selectedMoves.length ? (
          <Styled.Container
            innerRef={el => {
              this.tableRef = el;
            }}
          >
            <Table
              rowKey={uuidv4}
              dataSource={this.props.moveList.selectedMoves}
              columns={moveListColumns}
              pagination={false}
            />
          </Styled.Container>
        ) : null}
      </CommonContainer>
    );
  }
}

MoveList.propTypes = {
  actions: PropTypes.object,
  loadMoveList: PropTypes.func,
  moveList: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  moveList: makeSelectMoveList(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'moveList', reducer });
const withSaga = injectSaga({ key: 'moveList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MoveList);
