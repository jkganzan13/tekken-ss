import styled from 'styled-components';
import { Nav } from 'react-bootstrap';

export const Logo = styled.img`
  float: left;
  height: 50px;
`;

export const StyledNav = styled(Nav)`
  .dropdown a {
    padding: ${props => props.loggedIn ? '7.5px' : '15px'}
  }
  img {
    width: 35px;
    height: 35px;
  }
`;
