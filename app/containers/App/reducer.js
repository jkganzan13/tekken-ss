/*
 *
 * Combos reducer
 *
 */

import { fromJS } from 'immutable';
import { UPDATE_PROFILE } from './constants';

export const initialState = fromJS({
  profile: {},
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PROFILE:
      return state.set('profile', action.payload);
    default:
      return state;
  }
}

export default appReducer;
