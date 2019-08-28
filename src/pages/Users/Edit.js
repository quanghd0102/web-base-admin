import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'antd';
// import i18next from 'i18next';
// import components
import MaterialInput from 'components/MaterialInput';
// import containers
import AdminForm from 'containers/Admin/Form';

const { Item } = Form;

const UsersEdit = ({ id }) => (
  <AdminForm
    resource="users"
    id={id}
    render={getFieldDecorator => (
      <div>
        <div>
          {getFieldDecorator('id', {
                initialValue: {id},
              })(<MaterialInput type="hidden" />)}
        </div>
        <Item>
          {getFieldDecorator('username', {
                rules: [{ required: true }],
              })(<MaterialInput placeholder="username" />)}
        </Item>
        <Item>
          {getFieldDecorator('email', {
                rules: [{ required: true }],
              })(<MaterialInput placeholder="Email" />)}
        </Item>
        <Item>
          {getFieldDecorator('phoneNumber', {
                rules: [{ required: true }],
              })(<MaterialInput placeholder="Phone" />)}
        </Item>
        <Button type="primary" htmlType="submit">
              Edit
        </Button>
      </div>
        )}
  />
);

UsersEdit.propTypes = {
  id: PropTypes.any,
};

export default UsersEdit;
