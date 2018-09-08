import { takeLatest, call } from 'redux-saga/effects';
import { addFirestore } from 'utils/firestore';
import { ADD_COMBO, FIRESTORE_COMBOS_PATH } from './constants';

export function* addComboSaga(action) {
  yield call(addFirestore, FIRESTORE_COMBOS_PATH, {
    ...action.payload,
    timestamp: new Date(),
  });
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(ADD_COMBO, addComboSaga);
}
