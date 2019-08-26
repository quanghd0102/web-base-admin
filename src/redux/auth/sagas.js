import { takeEvery, put, delay } from 'redux-saga/effects';
import { showErrorNoti } from 'utils/notifications';
import { loginAction, loginSuccessAction } from './actions';

function* loginSaga() {
  try {
    yield delay(2000);
    yield put(loginSuccessAction());
  } catch (ex) {
    showErrorNoti(ex);
  }
}

export default [takeEvery(loginAction.type, loginSaga)];
