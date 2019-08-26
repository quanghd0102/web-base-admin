import { getAPI, putAPI, postAPI, delAPI } from 'api';

export function getListData(query) {
  return getAPI('/users', query);
}

export function getDataById(id) {
  return getAPI(`/users/${id}`);
}

export function createNewData(paramsReq) {
  return postAPI('/users', paramsReq);
}

export function updateDataById(id, paramsReq) {
  return putAPI(`/users/${id}`, paramsReq);
}

export function deleteData(id) {
  return delAPI(`/users/${id}`);
}