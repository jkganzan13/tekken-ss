import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import request from 'utils/request';
import {
  ADD_COMBO,
  CLEAR_FILTERS_AND_QUERY,
  RATE_COMBO,
  QUERY_COMBOS,
  FILTER_COMBOS,
} from './constants';
import { clearFilters, updateCombos, updateFilter } from './actions';
import makeSelectCombos, { makeCombosFilters } from './selectors';
import { getFilterQuery, updateRatingById } from './util';

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

export function* addComboSaga({ payload }) {
  const url = `${process.env.API_BASE_URL}/combos`;
  yield call(request.post, url, payload);
  yield call(queryCombosSaga);
}

export function* rateComboSaga({ payload }) {
  const combos = yield select(makeSelectCombos());
  yield put(
    updateCombos({
      combos: updateRatingById(combos, payload.id, payload.rating),
    }),
  );

  const requestFn = payload.rating ? request.post : request.delete;
  const url = `${process.env.API_BASE_URL}/ratings${
    payload.rating ? '' : `/${payload.id}`
  }`;
  yield call(requestFn, url, { combo_id: payload.id });
  yield call(queryCombosSaga);
}

export function* filterCombosSaga({ payload }) {
  yield put(updateFilter(payload));
  yield call(queryCombosSaga);
}

export function* clearFiltersSaga() {
  yield put(clearFilters());
  yield call(queryCombosSaga);
}

// Individual exports for testing
export default function* defaultSaga() {
  yield all([
    takeLatest(QUERY_COMBOS, queryCombosSaga),
    takeLatest(ADD_COMBO, addComboSaga),
    takeLatest(CLEAR_FILTERS_AND_QUERY, clearFiltersSaga),
    takeLatest(RATE_COMBO, rateComboSaga),
    takeLatest(FILTER_COMBOS, filterCombosSaga),
  ]);
}
