/*
 *
 * Combos reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADD_COMBO,
  CLEAR_FILTERS,
  FILTER_COMBOS,
  QUERY_COMBOS,
  UPDATE_COMBOS,
  UPDATE_FILTER,
} from './constants';

const initialFilterState = {
  name: [],
  combo: '',
  damage: '',
};

export const initialState = fromJS({
  filters: { ...initialFilterState },
  combos: [],
  isLoading: false,
});

function combosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COMBO:
    case FILTER_COMBOS:
    case QUERY_COMBOS:
      return state.set('isLoading', true);
    case CLEAR_FILTERS:
      return state.mergeIn(['filters'], initialFilterState);
    case UPDATE_FILTER:
      return state.setIn(['filters', action.payload.key], action.payload.value);
    case UPDATE_COMBOS:
      return state.set('isLoading', false).set('combos', action.payload.combos);
    default:
      return state;
  }
}

export default combosReducer;
