import React from 'react';
import i18next from 'i18next';
import DashboardWrapper from './styles';
import PageTitle from '../../components/PageTitle';

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <PageTitle>{i18next.t('dashboard.title')}</PageTitle>
      <div className="mainContent" />
    </DashboardWrapper>
  );
};

export default Dashboard;
