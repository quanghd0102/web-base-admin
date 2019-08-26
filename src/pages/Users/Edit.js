import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'antd';
import i18next from 'i18next';
// import components
import PageTitle from 'components/PageTitle';
import MaterialInput from 'components/MaterialInput';
// import containers
import AdminForm from 'containers/Admin/Form';

const { Item } = Form;

const UsersEdit = ({ match }) => (
  <div>
    <PageTitle>{i18next.t('users.title')}</PageTitle>
    <div className="mainContent">
      <AdminForm
        resource="users"
        id={match && match.params && match.params.id}
        render={getFieldDecorator => (
          <div>
            <div>
              {getFieldDecorator('id', {
                initialValue: '123',
              })(<MaterialInput type="hidden" />)}
            </div>
            <Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(<MaterialInput placeholder="username" />)}
            </Item>
            <Item>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please input your email!' }],
              })(<MaterialInput placeholder="Email" />)}
            </Item>
            <Item>
              {getFieldDecorator('phoneNumber', {
                rules: [{ required: true, message: 'Please input your phone!' }],
              })(<MaterialInput placeholder="Phone" />)}
            </Item>
            <Button type="primary" htmlType="submit">
              Edit
            </Button>
          </div>
        )}
      />
    </div>
  </div>
);

UsersEdit.propTypes = {
  match: PropTypes.object,
};

export default UsersEdit;
