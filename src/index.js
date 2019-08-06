import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';
import { ConfigProvider, Empty } from 'antd';
import * as serviceWorker from 'serviceWorker';
import theme from 'configs/theme';
import Routes from 'routes';
import './configs/language';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ConfigProvider renderEmpty={() => <Empty />}>
      <Routes />
    </ConfigProvider>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
