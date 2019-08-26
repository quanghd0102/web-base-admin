import listBaseActions from '../actions';

export const fetchListBaseAction = ({resource, query}) => dispatch => {
  return resource && listBaseActions[resource] && dispatch(listBaseActions[resource].fetchListDataAction({ query }));
};
export const fetchDataByIdBaseAction = ({resource, id}) => dispatch => {
  return resource && listBaseActions[resource] && dispatch(listBaseActions[resource].fetchDataByIdAction({ id }));
};
export const submitFormBaseAction = ({resource, params}) => dispatch => {
  return resource && listBaseActions[resource] && dispatch(listBaseActions[resource].submitFormDataAction({ params }));
};
export const deleteDataByIdBaseAction = ({resource, id}) => dispatch => {
  return resource && listBaseActions[resource] && dispatch(listBaseActions[resource].deleteDataByIdAction({ id }));
};
export const unSelectCurrentSelectedAction = ({resource}) => dispatch => {
  return resource && listBaseActions[resource] && dispatch(listBaseActions[resource].fetchDataByIdSuccessAction({ data: null }));
};
