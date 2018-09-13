/*
 *
 * Combos actions
 *
 */
import R from 'ramda';
import {
  ADD_COMBO,
  RATE_COMBO,
  UPDATE_FILTER,
  LOAD_COMBOS,
  UPDATE_COMBOS,
} from './constants';

export function addCombo(newCombo) {
  return {
    type: ADD_COMBO,
    payload: {
      ...newCombo,
      createdAt: new Date(),
    },
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

export function updateFilter(payload) {
  return {
    type: UPDATE_FILTER,
    payload,
  };
}

export function loadCombos() {
  return {
    type: LOAD_COMBOS,
  };
}

export function updateCombos(payload) {
  return {
    type: UPDATE_COMBOS,
    payload,
  };
}
