/*
 *
 * Combos actions
 *
 */
import {
  ADD_COMBO,
  CLEAR_FILTERS_AND_QUERY,
  CLEAR_FILTERS,
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

/**
 * @param {String} payload.id      - Combo ID
 * @param {Boolean} payload.rating - Rating { false: remove rating, true: add rating }
 */
export function rateCombo(payload) {
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

export function clearFiltersAndQuery() {
  return {
    type: CLEAR_FILTERS_AND_QUERY,
  };
}

export function clearFilters() {
  return {
    type: CLEAR_FILTERS,
  };
}
