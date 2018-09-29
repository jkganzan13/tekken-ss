import styled from 'styled-components';
import { Alert } from 'reactstrap';

export const StyledAlert = styled(Alert)`
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px;
  display: flex;
  align-items: center;
  border-radius: 0;

  svg {
    margin-right: 4px;
  }
`;
