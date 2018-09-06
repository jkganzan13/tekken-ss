/*
 *
 * Combos reducer
 *
 */

import { fromJS } from 'immutable';
import { UPDATE_FILTER } from './constants';

export const initialState = fromJS({
  filters: {
    name: '',
    combo: '',
    damage: '',
  },
  comboList: [],
});

function combosReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FILTER:
      return state.setIn(['filters', action.payload.key], action.payload.value);
    default:
      return state;
  }
}

export default combosReducer;
