import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ConfigProvider, Empty } from 'antd';
import * as serviceWorker from 'serviceWorker';
import Routes from 'routes';
import store, { history } from 'redux/store';
import GlobalStyle from './styles';
import './configs/language';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ConfigProvider renderEmpty={() => <Empty />}>
        <GlobalStyle />
        <Routes />
      </ConfigProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
