import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import PublicLayoutWrapper from './styles';

const { Sider, Content } = Layout;

const PublicLayout = ({ children }) => {
  return (
    <PublicLayoutWrapper>
      <Layout className="layout">
        <Content className="main-img" />
        <Sider className="main-content" width="450">
          {children}
        </Sider>
      </Layout>
    </PublicLayoutWrapper>
  );
};

PublicLayout.propTypes = {
  children: PropTypes.any,
};

export default PublicLayout;
