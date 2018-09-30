/*
 *
 * Combos reducer
 *
 */

import { fromJS } from 'immutable';
import {
  FILTER_COMBOS,
  QUERY_COMBOS,
  UPDATE_COMBOS,
  UPDATE_FILTER,
  ADD_COMBO,
} from './constants';

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
    case ADD_COMBO:
    case FILTER_COMBOS:
    case QUERY_COMBOS:
      return state.set('isLoading', true);
    case UPDATE_FILTER:
      return state.setIn(['filters', action.payload.key], action.payload.value);
    case UPDATE_COMBOS:
      return state.set('isLoading', false).set('combos', action.payload.combos);
    default:
      return state;
  }
}

export default combosReducer;
