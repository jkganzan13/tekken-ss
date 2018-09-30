import styled from 'styled-components';
import { DarkYellow, LightGrey } from 'assets/styles/colors';

const filterWidth = 356;

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
