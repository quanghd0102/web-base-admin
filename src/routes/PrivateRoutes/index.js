import { flatMap, map } from 'lodash';
import Home from 'pages/Dashboard';
import Users from 'pages/Users';

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
