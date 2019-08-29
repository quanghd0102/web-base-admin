import styled from 'styled-components';

const PrivateLayoutWrapper = styled.div`
  .trigger {
    font-size: 20px;
    line-height: 64px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #1890ff;
    }
  }

  .logo {
    height: 32px;
    background: rgba(0, 0, 0, 0.2);
    margin: 16px;
  }

  .sidebar {
    overflow: auto;
    height: 100vh;
    position: fixed;
    left: 0;
    background: #fff;
    box-shadow: 1px 0px 0px 0px #e8e8e8;

    .ant-menu {
      border-right: 1px solid #fff;
    }
  }

  .header {
    background: #fff;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;

    & .ant-avatar-lg.ant-avatar-icon {
      .anticon {
        font-size: 24px;
      }
    }
  }

  .mainContent {
    padding: 20px;
    background: #fff;
    min-height: 280;
  }

  .footer {
    text-align: center;
  }
`;

export default PrivateLayoutWrapper;
