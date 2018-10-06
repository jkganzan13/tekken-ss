import styled from 'styled-components';
import { Button } from 'reactstrap';
import { DarkYellow } from 'assets/styles/colors';

export const Primary = styled(Button)`
  background: ${DarkYellow};
  border-radius: 0;
  color: black;
  margin: 16px 0;
  &:hover {
    background: ${DarkYellow};
    color: black;
    opacity: 0.8;
  }
`;

export const Transparent = styled(Button)`
  background: transparent;
  border: 0;

  &:hover {
    background: transparent;
    color: ${DarkYellow};
  }

  &:active,
  &:active:focus,
  &:focus {
    background-color: transparent !important;
    box-shadow: none !important;
  }
`;
