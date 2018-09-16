/*
 *
 * MoveList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_MOVE_LIST,
  LOAD_MOVE_LIST_SUCCESS,
  LOAD_MOVE_LIST_ERROR,
  SELECT_CHARACTER,
} from './constants';

export const initialState = fromJS({
  loading: false,
  selected: '',
  moves: {},
});

function moveListReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MOVE_LIST:
      return state.set('loading', true);
    case LOAD_MOVE_LIST_SUCCESS:
      return state.set('moves', action.payload).set('loading', false);
    case LOAD_MOVE_LIST_ERROR:
      return state.set('loading', false);
    case SELECT_CHARACTER:
      return state.set('selected', action.payload);
    default:
      return state;
  }
}

export default moveListReducer;
