/*
 *
 * Combos actions
 *
 */
import { addFirestore } from 'utils/firestore';
import { ADD_COMBO, FIRESTORE_PATH } from './constants';

export const addCombo = newCombo => {
  addFirestore(FIRESTORE_PATH, {
    ...newCombo,
    rating: 0,
    timestamp: new Date().getTime(),
  });

  return {
    type: ADD_COMBO,
    payload: newCombo,
  };
};
