import { history } from 'redux/store';
import {isObject} from 'lodash';

export const updateHashUrl = (hash = "") => {
  if(!history) return;
  const {location} = history;
  history.push({...location, hash}); 
}

export const updateSearchUrl = (search = "") => {
  if(!history) return;
  const {location} = history;
  history.push({...location, search}); 
}

export const convertJsonToQueryString = (params) => {
  const esc = encodeURIComponent;
  return Object.keys(params)
    .map(k => `${esc(k)}=${esc(isObject(params[k]) ? JSON.stringify(params[k]) : params[k])}`)
    .join('&');
}

export const getQueryParamsUrl = () => {
  return decodeURI(window.location.search).replace('?', '').split('&').map(param => param.split('=')).reduce((values, [ key, value ]) => {
    if(key) values[key] = value;
    return values
  }, {})
}