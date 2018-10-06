import styled from 'styled-components';
import { Form as BsForm, Input as BsInput, Label as BsLabel } from 'reactstrap';

const margin = 8;

export const Form = styled(BsForm)`
  ${props =>
    props.inline
      ? `
      div.form-group {
        margin-right: ${margin * 2}px;
        &:nth-child(3) {
          flex-grow: 1;
        }
      }
    ` : 'background:red;'};
`;

export const Input = styled(BsInput)`
  border-radius: 0;
  width: ${props =>
    props.width
      ? `${props.width}px !important`
      : `calc(100% - 40px - ${margin}px) !important`};
`;

export const Label = styled(BsLabel)`
  font-family: 'Mental Medium';
  margin-right: ${props => (props.isInline ? `${margin}px` : '')};
`;

export const Title = styled.div`
  font-size: 24px;
  line-height: 40px;
`;
