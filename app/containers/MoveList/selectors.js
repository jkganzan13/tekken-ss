import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the moveList state domain
 */

const selectMoveListDomain = state => state.get('moveList', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by MoveList
 */

const makeSelectMoveList = () =>
  createSelector(selectMoveListDomain, substate => {
    const { selected, moves } = substate.toJS();
    return {
      selected,
      selectedMoves: moves[selected] ? moves[selected].data : [],
    };
  });

export default makeSelectMoveList;
export { selectMoveListDomain };
