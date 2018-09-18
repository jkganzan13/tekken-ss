import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import { updateFirestore } from 'utils/firestore';
import request from 'utils/request';
import {
  FIRESTORE_COMBOS_PATH,
  ADD_COMBO,
  RATE_COMBO,
  QUERY_COMBOS,
  FILTER_COMBOS,
} from './constants';
import { updateCombos, updateFilter } from './actions';
import makeSelectCombos, { makeCombosFilters } from './selectors';
import { getFilterQuery, updateCombosById } from './util';

export function* queryCombosSaga() {
  try {
    const filters = yield select(makeCombosFilters());
    const url = `${process.env.API_BASE_URL}/combos`;
    const combos = yield call(request.get, url + getFilterQuery(filters));
    yield put(updateCombos({ combos }));
  } catch (e) {
    yield put(updateCombos({ combos: [] }));
  }
}

export function* addComboSaga(action) {
  const url = `${process.env.API_BASE_URL}/combos`;
  yield call(request.post, url, action.payload);
  yield call(queryCombosSaga);
}

export function* rateComboSaga({ payload }) {
  const ratings = { ratings: payload.ratings };
  const combos = yield select(makeSelectCombos());
  yield put(
    updateCombos({ combos: updateCombosById(combos, payload.id, ratings) }),
  );
  yield call(updateFirestore, FIRESTORE_COMBOS_PATH, payload.id, ratings);
}

export function* filterCombosSaga({ payload }) {
  yield put(updateFilter(payload));
  yield call(queryCombosSaga);
}

// Individual exports for testing
export default function* defaultSaga() {
  yield all([
    takeLatest(QUERY_COMBOS, queryCombosSaga),
    takeLatest(ADD_COMBO, addComboSaga),
    takeLatest(RATE_COMBO, rateComboSaga),
    takeLatest(FILTER_COMBOS, filterCombosSaga),
  ]);
}
