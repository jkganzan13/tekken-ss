import styled from 'styled-components';
import { Button, Input } from 'reactstrap';
import { MdClose } from 'react-icons/md';
import { DarkYellow } from 'assets/styles/colors';
import { FilterBtn } from 'components/common/List/Styled';

const filterWidth = 356;

export const Filter = styled.div`
  flex: 0 0 ${filterWidth}px;
  padding-left: 8px;
  padding-right: 8px;
  height: calc(100vh - 82px);
`;

export const MobileFilter = styled.div`
  background: black;
  position: absolute;
  top: 0;
  left: 0;
  padding: 3rem;
  width: 100vw;
  height: 100vh;
  z-index: 1001;
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

export const Clear = styled(FilterBtn)`
  font-size: 16px;
`;

export const CloseBtn = styled(MdClose)`
  cursor: pointer;
  margin-bottom: 8px;
  margin-left: -10px;
`;
