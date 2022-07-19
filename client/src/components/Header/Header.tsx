import React from 'react';
import {HeaderProps} from '../../types/components/Header/header.types';
import {Wrapper} from './styles';
import NavBar from './NavBar/NavBar';
import Logo from './Logo/Logo';

const Header = ({linksArray}: HeaderProps) => {
  return (
    <Wrapper>
      <Logo/>
      <NavBar linksArray={linksArray}/>
    </Wrapper>
  );
};

export default Header;
