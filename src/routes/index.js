import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import {concat} from 'lodash';
import NotFoundPage from 'components/404Page';
import listPrivateRoutes from './PrivateRoutes';
import listPublicRoutes from './PublicRoutes';
import RoutesWrapper from './styles';

const listRoutes = concat(listPrivateRoutes, listPublicRoutes);
const MainRoutes = () => (
  <Switch>
    {listRoutes.map(route => (
      <Route {...route} />
    ))}
    <Route component={NotFoundPage} />
  </Switch>
)

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
        {listRoutes.map(route => (
          <Route {...route} />
        ))}
        <Route component={NotFoundPage} />
      </Switch>
    </RoutesWrapper>
  );
};

export default Routes;
