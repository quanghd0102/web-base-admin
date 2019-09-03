import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { Layout, Menu, Icon, Dropdown, Avatar } from 'antd';
import { findLast } from 'lodash';
import PrivateLayoutWrapper from './styles';

const { Header, Sider, Content, Footer } = Layout;
const sidebarMenu = [
  {
    key: 'dashboard',
    text: 'Dashboard',
    icon: 'dashboard',
    url: '/',
  },
  {
    key: 'users',
    text: 'Users',
    icon: 'user',
    url: '/users',
  },
  {
    key: 'posts',
    text: 'Posts',
    icon: 'snippets',
    url: '/posts',
  },
];
const profileMenu = [
  {
    key: 'profile',
    text: 'Profile',
    url: '#',
  },
];

const PrivateLayout = ({ children }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const [collapsed, setCollapsed] = useState(false);
  const [defaultSelectedKeys] = useState(
    findLast(sidebarMenu, menu => window.location.pathname.indexOf(menu.url) === 0) ||
      sidebarMenu[0]
  );
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <PrivateLayoutWrapper>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} className="sidebar">
          <div className="logo" />
          <Menu mode="inline" defaultSelectedKeys={[defaultSelectedKeys.key]}>
            {sidebarMenu.map(menu => (
              <Menu.Item key={menu.key}>
                <Link to={menu.url}>
                  <Icon type={menu.icon} />
                  <span>{menu.text}</span>
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout
          style={{
            marginLeft: collapsed ? 80 : 200,
            transition: 'all 0.2s ease 0s',
            background: '#F4F6FC',
            'minHeight': '100vh',
          }}
        >
          <Header className="header">
            <div>
              <Icon
                className="trigger"
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={toggle}
              />
            </div>
            <div>
              <Dropdown
                overlay={(
                  <Menu style={{ minWidth: '120px' }}>
                    {profileMenu.map(menu => (
                      <Menu.Item key={menu.key}>
                        <a href={menu.url}>{menu.text}</a>
                      </Menu.Item>
                    ))}
                    <Menu.Divider />
                    <Menu.Item key="logout">Logout</Menu.Item>
                  </Menu>
)}
                trigger={['click']}
              >
                <Avatar size="large" icon="user" />
              </Dropdown>
            </div>
          </Header>
          <Content
            style={{
              padding: '40px 20px',
            }}
          >
            {children}
          </Content>
          <Footer className="footer">Ant - React Admin ©2019 Created by QuangHD</Footer>
        </Layout>
      </Layout>
    </PrivateLayoutWrapper>
  );
};

PrivateLayout.propTypes = {
  children: PropTypes.any,
};

export default PrivateLayout;
