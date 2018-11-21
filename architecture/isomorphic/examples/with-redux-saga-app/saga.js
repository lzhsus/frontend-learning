/* global fetch */

import { delay } from 'redux-saga';
import { all, call, put, take, takeLatest } from 'redux-saga/effects';
import es6promise from 'es6-promise';
import 'isomorphic-unfetch';

import { actionTypes, failure, loadDataSuccess, tickClock } from './actions';

es6promise.polyfill();

function* runClockSaga() {
  yield take(actionTypes.START_CLOCK);
  while (true) {
    yield put(tickClock(false));
    yield call(delay, 1000);
  }
}

function* loadDataSaga() {
  try {
    const res = yield fetch('https://jsonplaceholder.typicode.com/users');
    const data = yield res.json();
    console.log('l0', Date.now());
    yield call(delay, 3000);
    console.log('l1', Date.now());
    yield put(loadDataSuccess(data));
    console.log('l2', Date.now());
  } catch (err) {
    yield put(failure(err));
  }
}

function* rootSaga() {
  yield all([
    // call(runClockSaga),
    takeLatest(actionTypes.LOAD_DATA, loadDataSaga)
  ]);
}

export default rootSaga;
