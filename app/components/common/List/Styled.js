import styled from 'styled-components';
import { Button } from 'reactstrap';
import { DarkYellow, LightGrey } from 'assets/styles/colors';

const contentHeight = 'calc(100vh - 82px)';

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
  height: ${contentHeight};
  overflow: auto;
`;

export const IconBtn = styled(Button)`
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
    color: ${DarkYellow};
  }

  svg {
    fill: none;
    margin-right: 4px;
  }
`;

export const MobileBtnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LoadingContainer = styled.div`
  height: ${contentHeight};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
