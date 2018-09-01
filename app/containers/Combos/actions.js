/*
 *
 * Combos actions
 *
 */
import { addFirestore } from 'utils/firestore';
import { ADD_COMBO, FIRESTORE_PATH, RATE_COMBO } from './constants';

export const addCombo = newCombo => {
  addFirestore(FIRESTORE_PATH, {
    ...newCombo,
    timestamp: new Date(),
  });

  return {
    type: ADD_COMBO,
    payload: newCombo,
  };
};

export const rateCombo = payload => {
  return {
    type: RATE_COMBO,
    payload,
  }
}
