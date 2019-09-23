import { takeLatest, put, call } from 'redux-saga/effects';
import { keyBy } from 'lodash';
import { getListData, getDataById, createNewData, updateDataById, deleteData } from 'api/users';
import { showErrorNoti } from 'utils/notifications';
import { push } from 'connected-react-router';
import {
  fetchListDataAction,
  fetchListDataSuccessAction,
  fetchDataByIdAction,
  fetchDataByIdSuccessAction,
  submitFormDataAction,
  deleteDataByIdAction,
} from './actions';

function* fetchListDataSaga({ payload = {} }) {
  try {
    const { query } = payload;
    const { data, total } = yield call(getListData, query);
    yield put(fetchListDataSuccessAction({ data: keyBy(data.data, res => res.id), total }));
  } catch (ex) {
    console.error(ex);
    showErrorNoti(ex);
  }
}

function* fetchDataByIdSaga({ payload = {} }) {
  try {
    const { id } = payload;
    const {data} = yield call(getDataById, id);
    yield put(fetchDataByIdSuccessAction({ data }));
  } catch (ex) {
    console.error(ex);
    showErrorNoti(ex);
  }
}

function* submitFormDataSaga({ payload = {} }) {
  try {
    const { params } = payload;
    const { id, ...paramsReq } = params;
    if (id) {
      yield call(updateDataById, id, paramsReq);
    } else {
      yield call(createNewData, paramsReq);
    }
    yield put(fetchListDataAction());
    yield put(push(`/users`));
  } catch (ex) {
    console.error(ex);
    showErrorNoti(ex);
  }
}

function* deleteDataByIdSaga({ payload = {} }) {
  try {
    const { id } = payload;
    yield call(deleteData, id);
    yield put(fetchListDataAction());
  } catch (ex) {
    console.error(ex);
    showErrorNoti(ex);
  }
}

export default [
  takeLatest(fetchListDataAction.type, fetchListDataSaga),
  takeLatest(fetchDataByIdAction.type, fetchDataByIdSaga),
  takeLatest(submitFormDataAction.type, submitFormDataSaga),
  takeLatest(deleteDataByIdAction.type, deleteDataByIdSaga),
];
