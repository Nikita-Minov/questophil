import React from 'react';
import {LogoLink, LogoWrapper} from './styles';

const Logo = () => {
  return (
    <LogoWrapper>
      <LogoLink to={'/'}>
        Logo
      </LogoLink>
    </LogoWrapper>
  );
};

export default Logo;
