import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { LOAD_MOVE_LIST } from './constants';
import { loadingSuccess, loadingError } from './actions';

export function* getMoveList() {
  const url = 'http://api.tekkenchicken.com/api/framedata/';
  try {
    const moveList = yield call(request, url);
    yield put(loadingSuccess(moveList));
  } catch (err) {
    yield put(loadingError(err));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(LOAD_MOVE_LIST, getMoveList);
}
