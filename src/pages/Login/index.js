import React from 'react';
import PublicLayout from 'layout/PublicLayout';
import LoginForm from 'containers/Login';
import LoginWrapper from './styles';

const Login = () => {
  return (
    <PublicLayout>
      <LoginWrapper>
        <LoginForm />
      </LoginWrapper>
    </PublicLayout>
  );
};

export default Login;
