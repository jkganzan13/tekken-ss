import styled from 'styled-components';
import { Nav } from 'react-bootstrap';

export const Logo = styled.img`
  float: left;
  height: 50px;
`;

export const StyledNav = styled(Nav)`
  .dropdown a {
    padding: 10px;
  }
  img {
    width: 30px;
    height: 30px;
  }
`;

export const AuthButton = styled.li`
  padding: 10px 5px;
  cursor: pointer;
`;
