import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import RoutesWrapper from './styles';

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
      <Router>
        <PublicRoutes />
        <PrivateRoutes />
      </Router>
    </RoutesWrapper>
  );
};

export default Routes;
