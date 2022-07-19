import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const NavBarWrapper = styled.nav`
  grid-column: 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
`;

export const HeaderLink = styled(NavLink)`
  text-decoration: none;
`;
