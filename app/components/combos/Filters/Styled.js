import styled from 'styled-components';
import { Button, Input } from 'reactstrap';
import { DarkYellow } from 'assets/styles/colors';

const filterWidth = 356;

export const Filter = styled.div`
  flex: 0 0 ${filterWidth}px;
  margin-right: 8px;
  height: calc(100vh - 82px);
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

export const Submit = styled(Button)`
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
