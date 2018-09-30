import styled from 'styled-components';
import { Button } from 'reactstrap';
import { DarkYellow, LightGrey } from 'assets/styles/colors';

export const Container = styled.div`
  background-color: transparent;
  color: white;
  display: flex;
  padding: 0.5rem 1rem;
`;

export const Pager = styled.div`
  display: flex;
  justify-content: center;
`;

export const Page = styled.div`
  color: ${DarkYellow};
  font-size: 20px;
  margin-right: 8px;
  cursor: pointer;
`;

export const ItemsContainer = styled.div`
  flex: 1;
  height: calc(100vh - 82px);
  overflow: auto;
`;

export const FilterBtn = styled(Button)`
  align-items: center;
  background: transparent;
  border: 0;
  color: ${LightGrey};
  display: flex;
  font-size: 20px;
  justify-content: center;
  padding: 4px 8px;
  margin-bottom: 8px;

  &:active,
  &:active:focus,
  &:focus,
  &:hover {
    background-color: transparent !important;
    box-shadow: none !important;
  }

  svg {
    fill: none;
    margin-right: 4px;
  }
`;

export const Drawer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`;
