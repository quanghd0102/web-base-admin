import { flatMap, map } from 'lodash';
import Home from 'pages/Dashboard';
import Users from 'pages/Users';
import UsersCreate from 'pages/Users/Create';
import UsersEdit from 'pages/Users/Edit';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/users',
    routes: [
      {
        path: '/',
        component: Users,
      },
      {
        path: '/create',
        component: UsersCreate,
      },
      {
        path: '/:id',
        component: UsersEdit,
      },
    ],
  },
];

const PrivateRoutes = flatMap(routes, route => {
  if (route.routes) {
    return map(route.routes, subRoute => ({
      ...subRoute,
      path: route.path + subRoute.path,
      exact: subRoute.path === '/',
    }));
  }
  return route;
});

export default PrivateRoutes;
