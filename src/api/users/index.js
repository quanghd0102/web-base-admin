import axios from 'axios';

export function getListData(query) {
  return axios({
    method: 'get',
    url: `${process.env.REACT_APP_SERVER_URL}/users`,
    params: query,
  })
}

export function getDataById(id) {
  return axios({
    method: 'get',
    url: `${process.env.REACT_APP_SERVER_URL}/users/${id}`,
  })
}

export function createNewData(paramsReq) {
  return axios({
    method: 'post',
    url: `${process.env.REACT_APP_SERVER_URL}/users`,
    data: paramsReq,
  })
}

export function updateDataById(id, paramsReq) {
  return axios({
    method: 'put',
    url: `${process.env.REACT_APP_SERVER_URL}/users/${id}`,
    data: paramsReq,
  })
}

export function deleteData(id) {
  return axios({
    method: 'delete',
    url: `${process.env.REACT_APP_SERVER_URL}/users/${id}`,
  })
}