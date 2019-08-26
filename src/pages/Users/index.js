import React from 'react';
import { Table } from 'antd';
import i18next from 'i18next';
// import components
import PageTitle from 'components/PageTitle';
// import containers
import AdminTable from 'containers/Admin/Table';
import UsersWrapper from './styles';

const { Column } = Table;

export default function Users() {
  return (
    <UsersWrapper>
      <PageTitle>{i18next.t('users.title')}</PageTitle>
      <div className="mainContent">
        <AdminTable resource="users" isActionCol>
          <Column title="Username" dataIndex="username" key="username" />
          <Column title="Email" dataIndex="email" key="email" />
          <Column title="Phone" dataIndex="phoneNumber" key="phoneNumber" />
        </AdminTable>
      </div>
    </UsersWrapper>
  );
}
