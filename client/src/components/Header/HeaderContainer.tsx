import React from 'react';
import Header from './Header';
import {HeaderLink} from '../../types/components/Header/header-container.types';

const HeaderContainer = () => {
  const linksArray: HeaderLink[] = [
    {name: 'Main', url: '/'},
    {name: 'About', url: '/about'},
    {name: 'Register', url: '/register'}];
  return (
    <Header linksArray={linksArray}/>
  );
};

export default HeaderContainer;
