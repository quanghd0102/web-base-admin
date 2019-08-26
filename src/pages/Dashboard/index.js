import React from 'react';
import { Table, Switch } from 'antd';
import i18next from 'i18next';
// import components
import PageTitle from 'components/PageTitle';
// import containers
import AdminTable from 'containers/Admin/Table';
import DashboardWrapper from './styles';

const { Column } = Table;

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <PageTitle>{i18next.t('dashboard.title')}</PageTitle>
      <div className="mainContent">
        <AdminTable resource="users">
          <Column title="username" dataIndex="username" key="username" />
          <Column title="Email" dataIndex="email" key="email" />
          <Column title="Role" dataIndex="role" key="role" />
        </AdminTable>
        <div>
          <AdminTable resource="categories">
            <Column title="title" dataIndex="title" key="title" />
            <Column
              title="isActive"
              dataIndex="isActive"
              key="isActive"
              render={value => <Switch defaultChecked={value} disabled />}
            />
          </AdminTable>
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default Dashboard;
