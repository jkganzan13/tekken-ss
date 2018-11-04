import styled from 'styled-components';
import { CommonContainer } from 'common/Styled';

export const Container = styled(CommonContainer)`
  height: calc(100vh - 82px);
  padding-bottom: 0 !important;
`;

export const TableContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  color: white;
  overflow: auto;
`;
