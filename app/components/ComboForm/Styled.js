import styled from 'styled-components';
import { Form } from 'react-bootstrap';

export const Container = styled.div`
  border: 1px solid lightgrey;
  padding: 10px;
`;

export const HeaderContainer = styled.div`
  font-weight: bold;
`;

export const ComboContainer = styled.div`
  border: 1px solid lightgrey;
  background: white;
  height: 50px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TextContainer = styled.div`
  margin-top: 10px;
`;

export const StyledForm = styled(Form)`
  > * {
    margin-right: 10px;
  }
`;
