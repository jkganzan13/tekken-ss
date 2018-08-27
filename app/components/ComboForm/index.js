/**
 *
 * ComboForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormControl } from 'react-bootstrap';
import Combo from 'components/Combo';
import { CHARACTER_NAMES } from 'constants/characters';
import * as Styled from './Styled';

/* eslint-disable react/prefer-stateless-function */
export class ComboForm extends React.Component {
  state = {
    name: CHARACTER_NAMES[0],
    combo: '',
    damage: 0,
  };

  onChange = key => e => this.setState({ [key]: e.target.value });

  onSubmit = () => {
    this.props.onSubmit(this.state);
    this.setState({ combo: '', damage: 0 });
  };

  renderOptions = () =>
    CHARACTER_NAMES.map(name => (
      <option key={name} value={name}>
        {name}
      </option>
    ));

  render() {
    return (
      <Styled.Container>
        <Styled.HeaderContainer>Submit a combo</Styled.HeaderContainer>
        <Styled.ComboContainer>
          <Combo combo={this.state.combo} />
        </Styled.ComboContainer>
        <Styled.StyledForm inline>
          <FormControl
            componentClass="select"
            placeholder="select"
            onChange={this.onChange('name')}
            value={this.state.character}
          >
            {this.renderOptions()}
          </FormControl>
          <FormControl
            type="text"
            value={this.state.damage}
            placeholder="Damage"
            onChange={this.onChange('damage')}
          />
          <Button bsStyle="primary" onClick={this.onSubmit}>
            Submit
          </Button>
        </Styled.StyledForm>
        <Styled.TextContainer>
          <FormControl
            componentClass="textarea"
            placeholder="textarea"
            value={this.state.combo}
            onChange={this.onChange('combo')}
          />
        </Styled.TextContainer>
      </Styled.Container>
    );
  }
}

ComboForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ComboForm;
