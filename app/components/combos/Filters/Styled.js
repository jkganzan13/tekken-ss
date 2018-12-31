import styled from 'styled-components';
import { Input } from 'reactstrap';

const filterWidth = 356;

export const Filter = styled.div`
  flex: 0 0 ${filterWidth}px;
  padding-left: calc(1rem + 8px);
  padding-right: 8px;
  height: calc(100vh - 82px);
`;

export const FilterTitleContainer = styled.div`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
`;

export const FilterTitle = styled.div`
  font-size: 24px;
`;

export const FilterItem = styled.div`
  margin: 16px 0;
`;

export const FilterHeader = styled.div`
  font-size: 20px;
  margin-bottom: 8px;
`;

export const FilterInput = styled(Input)`
  border-radius: 0;
  border: 0;
`;
