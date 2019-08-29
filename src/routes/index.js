import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { concat } from 'lodash';
import NotFoundPage from 'components/404Page';
import listPrivateRoutes from './PrivateRoutes';
import listPublicRoutes from './PublicRoutes';
import ModalRoutes from './ModalRoutes';
import RoutesWrapper from './styles';

const listAllRoutes = concat(listPrivateRoutes, listPublicRoutes);

const Routes = () => {
  useEffect(() => {
    const ele = document.getElementById('ipl-progress-indicator');
    if (ele) {
      setTimeout(() => {
        // fade out
        ele.classList.add('available');
      }, 500);
      setTimeout(() => {
        // remove from DOM
        ele.outerHTML = '';
      }, 1500);
    }
  }, []);

  return (
    <RoutesWrapper>
      <Switch>
        {listAllRoutes.map(route => (
          <Route {...route} key={route.path} />
        ))}
        <Route component={NotFoundPage} />
      </Switch>
      <ModalRoutes />
    </RoutesWrapper>
  );
};

export default Routes;
