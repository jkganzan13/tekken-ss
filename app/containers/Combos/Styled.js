import styled from 'styled-components';
import { ListHeader } from 'common/Styled';

export const Container = styled.div`
  background: white;

  margin-bottom: 12px;
`;

export const ScrollableContainer = styled.div`
  overflow-y: scroll;
`;

export const StyledHeader = styled(ListHeader)`
  > * {
    margin-right: 10px;
  }

  .ant-select {
    width: 20%;
    min-width: 200px;
  }

  .ant-input {
    width: 10%;
    min-width: 100px;
  }
`;
