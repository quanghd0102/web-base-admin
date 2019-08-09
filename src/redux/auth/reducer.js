import { createReducer } from 'redux-starter-kit';
import { loginSuccessAction } from './actions';

export const initialState = {
  isAuthenticated: false,
  roles: '',
};

const loginSuccess = state => ({ ...state, isAuthenticated: true });

export default createReducer(initialState, {
  [loginSuccessAction]: loginSuccess,
});
