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
import Table from 'components/moveList/Table';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import CharacterSelect from 'components/common/Select/CharacterSelect';
import * as Styled from './Styled';
import makeSelectMoveList from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';
import { moveListColumns } from './data';

/* eslint-disable react/prefer-stateless-function */
export class MoveList extends React.PureComponent {
  onCharacterSelect = value => this.props.actions.selectCharacter(value);

  render() {
    return (
      <Styled.Container>
        <CharacterSelect
          value={{
            value: this.props.moveList.selected,
            label: this.props.moveList.selected,
          }}
          onChange={this.onCharacterSelect}
          closeMenuOnSelect
          isMulti={false}
        />
        <Table
          moves={this.props.moveList.selectedMoves}
          isLoading={this.props.isLoading}
        />
      </Styled.Container>
    );
  }
}

MoveList.propTypes = {
  actions: PropTypes.object,
  moveList: PropTypes.object,
  isLoading: PropTypes.bool,
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
