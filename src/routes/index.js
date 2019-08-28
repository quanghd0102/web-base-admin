import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { concat, filter } from 'lodash';
import NotFoundPage from 'components/404Page';
import listPrivateRoutes from './PrivateRoutes';
import listPublicRoutes from './PublicRoutes';
import ModalRoutes from './ModalRoutes';
import RoutesWrapper from './styles';

const listAllRoutes = concat(listPrivateRoutes, listPublicRoutes);
const listMainRoutes = filter(listAllRoutes, route => !route.isModal);
const listModalRoutes = filter(listAllRoutes, route => route.isModal);

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
        {listMainRoutes.map(route => (
          <Route {...route} />
        ))}
        {listModalRoutes.map(route => (
          <Route
            {...route}
            component={() => (
              <div>
                <route.parentComponent />
                <route.component />
              </div>
)}
          />
      ))}
        <Route component={NotFoundPage} />
      </Switch>
      <ModalRoutes />
    </RoutesWrapper>
  );
};

export default Routes;
