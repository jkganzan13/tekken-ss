/**
 *
 * ComboForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormControl } from 'react-bootstrap';
import Combo from 'components/Combo';
import * as Styled from './Styled';

/* eslint-disable react/prefer-stateless-function */
export class ComboForm extends React.Component {
  state = {
    input: '',
  };

  onChange = e => this.setState({ input: e.target.value });

  onSubmit = () => {
    this.props.onSubmit(this.state.input);
    this.setState({ input: '' });
  };

  render() {
    return (
      <Styled.Container>
        <Styled.HeaderContainer>Submit a combo</Styled.HeaderContainer>
        <Styled.ComboContainer>
          <Combo combo={this.state.input} />
        </Styled.ComboContainer>
        <FormControl
          componentClass="textarea"
          placeholder="textarea"
          value={this.state.input}
          onChange={this.onChange}
        />
        <Styled.ButtonContainer>
          <Button onClick={this.onSubmit}>Submit</Button>
        </Styled.ButtonContainer>
      </Styled.Container>
    );
  }
}

ComboForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ComboForm;
