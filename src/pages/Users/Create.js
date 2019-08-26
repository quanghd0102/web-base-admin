import React from 'react';
import { Form, Button } from 'antd';
import i18next from 'i18next';
// import components
import PageTitle from 'components/PageTitle';
import MaterialInput from 'components/MaterialInput';
// import containers
import AdminForm from 'containers/Admin/Form';

const { Item } = Form;

const UsersCreate = () => (
  <div>
    <PageTitle>{i18next.t('users.title')}</PageTitle>
    <div className="mainContent">
      <AdminForm
        resource="users"
        render={getFieldDecorator => (
          <div>
            <Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(<MaterialInput placeholder="Username" />)}
            </Item>
            <Item>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please input your email!' }],
              })(<MaterialInput placeholder="Email" />)}
            </Item>
            <Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your pasword!' }],
              })(<MaterialInput placeholder="Password" type="password" />)}
            </Item>
            <Item>
              {getFieldDecorator('phoneNumber', {
                rules: [{ required: true, message: 'Please input your phone number!' }],
              })(<MaterialInput placeholder="Phone number" />)}
            </Item>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </div>
        )}
      />
    </div>
  </div>
);

export default UsersCreate;
