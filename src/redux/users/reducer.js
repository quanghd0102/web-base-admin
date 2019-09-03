import { createReducer } from 'redux-starter-kit';
import {
  fetchListDataAction,
  fetchDataByIdSuccessAction,
  fetchListDataSuccessAction,
} from './actions';

export const initialState = {
  listData: [],
  totalData: 0,
  isFetching: false,
  currentSelected: null,
};

const fetchListData = state => {
  state.isFetching = true;
};

const fetchListDataSuccess = (state, { payload }) => {
  const { data, total } = payload;
  state.listData = data;
  state.totalData = total;
  state.isFetching = false;
};

const fetchDataByIdSuccess = (state, { payload }) => {
  const { data } = payload;
  state.currentSelected = data;
};

export default createReducer(initialState, {
  [fetchListDataAction]: fetchListData,
  [fetchListDataSuccessAction]: fetchListDataSuccess,
  [fetchDataByIdSuccessAction]: fetchDataByIdSuccess,
});
