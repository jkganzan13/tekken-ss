/*
 *
 * MoveList actions
 *
 */

import {
  LOAD_MOVE_LIST,
  LOAD_MOVE_LIST_SUCCESS,
  LOAD_MOVE_LIST_ERROR,
  SELECT_CHARACTER,
} from './constants';

export function loadMoveList() {
  return {
    type: LOAD_MOVE_LIST,
  };
}

export function loadingSuccess(payload) {
  return {
    type: LOAD_MOVE_LIST_SUCCESS,
    payload,
  };
}

export function loadingError(payload) {
  return {
    type: LOAD_MOVE_LIST_ERROR,
    payload,
  };
}

export function selectCharacter(payload) {
  return {
    type: SELECT_CHARACTER,
    payload,
  };
}
