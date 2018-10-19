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

const getSelectedMoves = name => {
  const key = name
    .split(' ')
    .join('-')
    .toLowerCase();
  return movelist[key] || [];
};

const makeSelectMoveList = () =>
  createSelector(selectMoveListDomain, substate => {
    const { selected } = substate.toJS();
    return {
      selected,
      selectedMoves: getSelectedMoves(selected),
    };
  });

export default makeSelectMoveList;
export { selectMoveListDomain };
