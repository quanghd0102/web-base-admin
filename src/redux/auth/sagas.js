import { takeEvery, put, delay } from 'redux-saga/effects';
import { loginAction, loginSuccessAction } from './actions';

function* loginSaga() {
  yield delay(2000);
  yield put(loginSuccessAction());
}

export default [takeEvery(loginAction.type, loginSaga)];
