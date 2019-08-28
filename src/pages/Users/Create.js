import React from 'react';
import { Form, Button } from 'antd';
// import i18next from 'i18next';
// import components
import MaterialInput from 'components/MaterialInput';
// import containers
import AdminForm from 'containers/Admin/Form';

const { Item } = Form;

const UsersCreate = () => (
  <AdminForm
    resource="users"
    render={getFieldDecorator => (
      <div>
        <Item>
          {getFieldDecorator('username', {
                rules: [{ required: true }],
              })(<MaterialInput placeholder="Username" />)}
        </Item>
        <Item>
          {getFieldDecorator('email', {
                rules: [{ required: true }],
              })(<MaterialInput placeholder="Email" />)}
        </Item>
        <Item>
          {getFieldDecorator('password', {
                rules: [{ required: true }],
              })(<MaterialInput placeholder="Password" type="password" />)}
        </Item>
        <Item>
          {getFieldDecorator('phoneNumber', {
                rules: [{ required: true }],
              })(<MaterialInput placeholder="Phone number" />)}
        </Item>
        <Button type="primary" htmlType="submit">
              Add
        </Button>
      </div>
        )}
  />
);

export default UsersCreate;
