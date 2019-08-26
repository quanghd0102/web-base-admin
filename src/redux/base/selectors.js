import { createSelector } from 'reselect';
import {values} from 'lodash';

export const getListDataSelector = createSelector(
  state => state,
  (_, resource) => resource,
  (state, resource) => state[resource] ? values(state[resource].listData) : []
);