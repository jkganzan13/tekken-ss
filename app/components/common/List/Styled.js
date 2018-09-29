import styled from 'styled-components';
import { DarkYellow, LightGrey } from 'assets/styles/colors';

export const Container = styled.div`
  background-color: transparent;
  color: white;
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
