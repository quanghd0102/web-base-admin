import React from 'react';
import i18next from 'i18next';
// import components
import PageTitle from 'components/PageTitle';
import PrivateLayout from 'layout/PrivateLayout';
// import containers
import DashboardWrapper from './styles';

const Dashboard = () => {
  return (
    <PrivateLayout>
      <DashboardWrapper>
        <PageTitle>{i18next.t('dashboard.title')}</PageTitle>
      </DashboardWrapper>
    </PrivateLayout>
  );
};

export default Dashboard;
