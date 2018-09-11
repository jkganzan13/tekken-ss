import { all, takeLatest, call } from 'redux-saga/effects';
import { addFirestore, updateFirestore } from 'utils/firestore';
import { FIRESTORE_COMBOS_PATH, ADD_COMBO, RATE_COMBO } from './constants';

export function* addComboSaga(action) {
  yield call(addFirestore, FIRESTORE_COMBOS_PATH, action.payload);
}

export function* rateComboSaga({ payload }) {
  yield call(updateFirestore, FIRESTORE_COMBOS_PATH, payload.id, {
    ratings: payload.ratings,
  });
}

// Individual exports for testing
export default function* defaultSaga() {
  yield all([
    takeLatest(ADD_COMBO, addComboSaga),
    takeLatest(RATE_COMBO, rateComboSaga),
  ]);
}
