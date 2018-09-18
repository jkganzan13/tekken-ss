/*
 *
 * Combos actions
 *
 */
import R from 'ramda';
import {
  ADD_COMBO,
  RATE_COMBO,
  FILTER_COMBOS,
  QUERY_COMBOS,
  UPDATE_COMBOS,
  UPDATE_FILTER,
} from './constants';

export function addCombo(payload) {
  return {
    type: ADD_COMBO,
    payload,
  };
}

const updateRatings = (userId, rating, ratings = []) => {
  let newRatings = [...ratings];
  if (rating) newRatings.push({ userId, upvote: true });
  else newRatings = R.reject(r => r.userId === userId, ratings);
  return newRatings;
};

export function rateCombo(combo, userId, rating) {
  const payload = {
    id: combo.id,
    ratings: updateRatings(userId, rating, combo.ratings),
  };
  return {
    type: RATE_COMBO,
    payload,
  };
}

export function filterCombos(payload) {
  return {
    type: FILTER_COMBOS,
    payload,
  };
}

export function updateFilter(payload) {
  return {
    type: UPDATE_FILTER,
    payload,
  };
}

export function queryCombos() {
  return {
    type: QUERY_COMBOS,
  };
}

export function updateCombos(payload) {
  return {
    type: UPDATE_COMBOS,
    payload,
  };
}
