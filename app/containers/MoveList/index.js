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

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { CommonContainer } from 'common/Styled';
import CharacterSelect from 'components/CharacterSelect';
import * as Styled from './Styled';
import makeSelectMoveList from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';

/* eslint-disable react/prefer-stateless-function */
export class MoveList extends React.PureComponent {
  componentDidMount() {
    // fetch data
    this.props.loadMoveList();
  }
  render() {
    return (
      <CommonContainer>
        <CharacterSelect
          onSelect={this.props.actions.selectCharacter}
          selected={this.props.moveList.selected}
        />
        <Styled.Container>
          {JSON.stringify(this.props.moveList.selectedMoves)}
        </Styled.Container>
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
    loadMoveList: () => dispatch(actions.loadMoveList()),
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
