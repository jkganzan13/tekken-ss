/*
 *
 * Combos reducer
 *
 */

import { fromJS } from 'immutable';
import { LOAD_COMBOS, UPDATE_COMBOS } from './constants';

export const initialState = fromJS({
  filters: {
    name: [],
    combo: '',
    damage: '',
  },
  combos: [],
  isLoading: false,
});

function combosReducer(state = initialState, action) {
  switch (action.type) {
    // case UPDATE_FILTER:
    //   return state.setIn(['filters', action.payload.key], action.payload.value);
    case LOAD_COMBOS:
      return state.set('isLoading', true);
    case UPDATE_COMBOS:
      return state.set('combos', action.payload.combos).set('isLoading', false);
    default:
      return state;
  }
}

export default combosReducer;
