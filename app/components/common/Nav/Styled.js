import styled from 'styled-components';
import { NavItem, NavLink, DropdownToggle, DropdownItem } from 'reactstrap';
import { DarkYellow, LightGrey } from 'assets/styles/colors';
import { FONT_NAMES } from 'assets/fonts';
import background from 'images/background.jpg';

const LINK_STYLE = `
  color: ${LightGrey};
  font-family: ${FONT_NAMES.MENTAL_BOLD};
  font-size: 20px;
  line-height: 50px;

  &:hover {
    color: ${DarkYellow};
  }
`;

/* Desktop */
export const Logo = styled.img`
  float: left;
  height: 55px;
`;

export const StyledNavLink = styled(NavLink)`
  ${LINK_STYLE};
`;

export const LoginButtonContainer = styled(NavItem)`
  float: right;
`;

export const LoginButton = styled(StyledNavLink)`
  cursor: pointer;
`;

export const StyledAvatar = styled.img`
  border-radius: 50%;
`;

export const StyledDropdownToggle = styled(DropdownToggle)`
  &::after {
    border-bottom-color: ${LightGrey};
    border-top-color: ${LightGrey};
  }
`;

export const StyledDropdownItem = styled(DropdownItem)`
  cursor: pointer;
`;

/* Mobile */
export const MobileNavContainer = styled.div`
  height: 64px;
  padding: 0.5rem 1rem;

  .bm-burger-button {
    height: 30px;
    right: 2rem;
    position: fixed;
    width: 36px;
    top: 1.25rem;
  }

  .bm-burger-bars {
    background: ${LightGrey};
  }

  .bm-menu {
    background: url('${background}') repeat top center;
    padding: 2.5em 1.5em 0;

    a {
      padding: 0;
    }

    .bm-cross-button {
      color: ${LightGrey};
    }

    .bm-item {
      ${LINK_STYLE};
      text-decoration: none;
    }
  }
`;
