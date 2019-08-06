import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { flatMap, map } from 'lodash';
import PrivateLayout from 'layout/PrivateLayout';
// import NotFoundPage from 'components/404Page';
import Home from 'pages/Dashboard';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
];

const PrivateRoutes = () => (
  <PrivateLayout>
    <Switch>
      {map(
        flatMap(routes, route => {
          if (route.routes) {
            return map(route.routes, subRoute => ({
              ...subRoute,
              path: route.path + subRoute.path,
              exact: subRoute.path === '/',
            }));
          }
          return route;
        }),
        route => (
          <Route {...route} key={route.path} />
        )
      )}
      {/* <Route component={NotFoundPage} /> */}
    </Switch>
  </PrivateLayout>
);

PrivateRoutes.propTypes = {};

export default PrivateRoutes;
