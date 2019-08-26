import React from 'react';
import Lottie from 'lottie-react-web';
import animation from '../../assets/icons/lotties/loading-icon.json';
import LoadingIconWrapper from './styles';

const LoadingIcon = () => (
  <LoadingIconWrapper>
    <Lottie
      options={{
        animationData: animation,
      }}
    />
  </LoadingIconWrapper>
);

export default LoadingIcon;
