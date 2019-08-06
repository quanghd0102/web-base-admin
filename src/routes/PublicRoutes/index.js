import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from 'pages/Login';

const routes = [
  {
    path: '/login',
    component: Login,
    exact: true,
  },
];

const PublicRoutes = () => {
  return (
    <Switch>
      {routes.map(route => {
        return <Route {...route} key={route.path} />;
      })}
    </Switch>
  );
};

export default PublicRoutes;
