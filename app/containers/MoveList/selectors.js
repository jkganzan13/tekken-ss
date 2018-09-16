import movelist from 'constants/movelist.json';
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
    const { selected } = substate.toJS();
    return {
      selected,
      selectedMoves: movelist[selected] || [],
    };
  });

export default makeSelectMoveList;
export { selectMoveListDomain };
