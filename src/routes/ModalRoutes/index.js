import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { withRouter } from "react-router";
import {Drawer} from 'antd';
import {flatMapDepth, map, find} from 'lodash';
import UrlPattern from 'url-pattern';
// import pages 
import UsersCreate from 'pages/Users/Create';
import UsersEdit from 'pages/Users/Edit';
import {closeHashModal} from 'utils';

const routes = [
  {
    path: '/users',
    routes: [
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
]

const listModalRoutes = flatMapDepth(routes, route => {
  if (route.routes) {
    return map(route.routes, subRoute => ({
      ...subRoute,
      path: route.path + subRoute.path,
      exact: subRoute.path === '/',
    }));
  }
  return route;
});

const ModalRoutes = ({ location, history }) => {
  // hooks
  const [visible, setVisible] = useState(false);
  const [modalRoute, setModalRoute] = useState(null);
  const [params, setParams] = useState({});
  useEffect(() => {
    const {hash = ""} = location;
    const queryString = hash.replace("#", '');
    const modalComponent = find(listModalRoutes, route => {
      const pattern = new UrlPattern(route.path);
      const routeParams = pattern.match(queryString);
      if(routeParams) setParams(routeParams);
      return routeParams;
    });
    if(modalComponent) {
      setVisible(true);
      setModalRoute(modalComponent);
    }
  }, [location])

  // functions
  const onClose = () => {
    closeHashModal(history);
    setVisible(false);
    setTimeout(() => {
      setModalRoute(null);
      setParams(null);
    }, 500);
  }
  

  return (
    <Drawer
      title="Basic Drawer"
      placement="right"
      onClose={onClose}
      visible={visible}
    >
      {modalRoute ? <modalRoute.component {...params} /> : null}
    </Drawer>
  )
}

ModalRoutes.propTypes = {
  location: PropTypes.any,
  history: PropTypes.object,
}

export default withRouter(ModalRoutes)