import { all, takeLatest, call, put } from 'redux-saga/effects';
import {
  addFirestore,
  updateFirestore,
  queryCollection,
} from 'utils/firestore';
import {
  FIRESTORE_COMBOS_PATH,
  ADD_COMBO,
  RATE_COMBO,
  LOAD_COMBOS,
} from './constants';
import { updateCombos } from './actions';

// TODO: Fix
export function* addComboSaga(action) {
  yield call(addFirestore, FIRESTORE_COMBOS_PATH, action.payload);
}

// TODO: Fix
export function* rateComboSaga({ payload }) {
  yield call(updateFirestore, FIRESTORE_COMBOS_PATH, payload.id, {
    ratings: payload.ratings,
  });
}

export function* loadCombosSaga() {
  try {
    const combos = yield call(queryCollection, 'combos', null);
    yield put(updateCombos({ combos }));
  } catch (e) {
    yield put(updateCombos({ combos: [] }));
  }
}

// TODO
export function* filterCombosSaga({ payload }) {
  try {
    const combos = yield call();
    yield put(updateCombos({ combos }));
  } catch (e) {
    yield put(updateCombos({ combos: [] }));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield all([
    takeLatest(LOAD_COMBOS, loadCombosSaga),
    takeLatest(ADD_COMBO, addComboSaga),
    takeLatest(RATE_COMBO, rateComboSaga),
  ]);
}
