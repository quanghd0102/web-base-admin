import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';
// We'll use redux-logger just as an example of adding another middleware
import logger from 'redux-logger';
// And use redux-batch as an example of adding enhancers
import { reduxBatch } from '@manaflair/redux-batch';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import rootSaga from './sagas';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), logger, sagaMiddleware],
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [reduxBatch],
});

sagaMiddleware.run(rootSaga);

export default store;
