/*
 *
 * Combos actions
 *
 */
import { ADD_COMBO, RATE_COMBO, UPDATE_FILTER } from './constants';

export function addCombo(newCombo) {
  return {
    type: ADD_COMBO,
    payload: newCombo,
  };
}

export function rateCombo(payload) {
  return {
    type: RATE_COMBO,
    payload,
  };
}

export function updateFilter(payload) {
  return {
    type: UPDATE_FILTER,
    payload,
  };
}
