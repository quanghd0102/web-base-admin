import { createAction } from 'redux-starter-kit';

export const fetchListDataAction = createAction('FETCH_LIST_USERS');
export const fetchListDataSuccessAction = createAction('FETCH_LIST_USERS_SUCCESS');
export const fetchDataByIdAction = createAction('FETCH_USERS_BY_ID');
export const fetchDataByIdSuccessAction = createAction('FETCH_USERS_BY_ID_SUCCESS');
export const submitFormDataAction = createAction('SUBMIT_FORM_USERS');
export const submitFormDataSuccessAction = createAction('SUBMIT_FORM_USERS_SUCCESS');
export const deleteDataByIdAction = createAction('DELETE_USERS_BY_ID');
export const deleteDataByIdSuccessAction = createAction('DELETE_USERS_BY_ID_SUCCESS');
