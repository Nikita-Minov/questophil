import React from 'react';
import {HeaderLink, NavBarWrapper} from './styles';
import {
  HeaderProps,
} from '../../../types/components/Header/NavBar/navbar.types';

const NavBar = ({linksArray}: HeaderProps) => {
  return (
    <NavBarWrapper>
      {
        linksArray.map((el, id) => {
          return (
            <div key={id}>
              <HeaderLink to={el.url}>{el.name}</HeaderLink>
            </div>
          );
        })
      }
    </NavBarWrapper>
  );
};

export default NavBar;
