import { all } from 'redux-saga/effects';
import authSaga from './auth/sagas';
import usersSaga from './users/sagas';

export default function* root() {
  yield all([...authSaga, ...usersSaga]);
}
