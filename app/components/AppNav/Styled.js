import styled from 'styled-components';
import { Layout, Menu, Dropdown } from 'antd';

export const Logo = styled.img`
  float: left;
  height: 64px;
`;

export const StyledMenu = styled(Menu)`
  line-height: 64px;
`;

export const StyledNavDropdown = styled(Dropdown)`
  float: right;
  cursor: pointer;
`;

export const StyledHeader = styled(Layout.Header)`
  background-color: white;
`;

export const AuthButton = styled.li`
  padding: 10px 5px;
  cursor: pointer;
`;
