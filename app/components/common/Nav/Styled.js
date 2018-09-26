import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 64px;
  padding-left: 50px;
  padding-right: 50px;
  margin: auto;
  background: transparent;
`;

//#f6a623 yellow
//#c6c9c8 dirty white
export const NavContainer = styled.nav`
  float: right;
`;

export const NavLink = styled(Link)`
  font-family: 'Mental Bold';
  color: #c6c9c8;
  cursor: pointer;
  font-size: 20px;
  line-height: 64px;
  text-decoration: none;
  padding-left: 50px;

  &:hover {
    color: hsl(0, 0%, 100%);
  }
`;

export const Logo = styled.img`
  float: left;
  height: 64px;
`;
