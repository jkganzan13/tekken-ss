import React from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
import { FormGroup } from 'reactstrap';
import * as Styled from './Styled';

const omitNonInputProps = R.omit(['inputComponent', 'label', 'inline']);

const FormInput = props => (
  <FormGroup>
    <Styled.Label htmlFor={props.id} isInline={props.inline}>
      {props.label}
    </Styled.Label>
    <props.inputComponent id={props.id} {...omitNonInputProps(props)} />
  </FormGroup>
);

FormInput.propTypes = {
  id: PropTypes.string,
  inline: PropTypes.bool,
  label: PropTypes.string,
  inputComponent: PropTypes.func,
};

FormInput.defaultProps = {
  inputComponent: Styled.Input,
};

export default FormInput;
