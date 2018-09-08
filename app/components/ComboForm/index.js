/**
 *
 * ComboForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { message, Button, Input } from 'antd';
import Combo from 'components/Combo';
import CharacterDropdown from 'components/CharacterDropdown';
import * as Styled from './Styled';

/* eslint-disable react/prefer-stateless-function */
export class ComboForm extends React.Component {
  state = {
    name: undefined,
    combo: 'd/f+2, b+2,1, d/b+2,2',
    damage: '',
  };

  onChange = key => e => this.setState({ [key]: e.target.value });

  validate = () => {
    const error = Object.keys(this.state).reduce((acc, k) => {
      /* eslint-disable no-param-reassign */
      if (!this.state[k]) acc = acc ? `${acc}, ${k}` : k;
      return acc;
    }, '');
    if (error) {
      message.error(`Invalid input: ${error}`, 3);
      return false;
    }
    return true;
  };

  onSubmit = () => {
    if (this.validate()) {
      this.props.onSubmit(this.state);
      this.setState({ combo: '', damage: '' });
    }
  };

  render() {
    return (
      <Styled.Container>
        <Styled.HeaderContainer>Submit a combo</Styled.HeaderContainer>
        <Styled.ComboContainer>
          <Combo combo={this.state.combo} />
        </Styled.ComboContainer>
        <Styled.StyledForm>
          <CharacterDropdown
            onChange={this.onChange('name')}
            value={this.state.name}
          />
          <Input
            value={this.state.damage}
            placeholder="Damage"
            onChange={this.onChange('damage')}
          />
          <Button type="primary" onClick={this.onSubmit}>
            Submit
          </Button>
        </Styled.StyledForm>
        <Styled.TextContainer>
          <Input.TextArea
            placeholder="Enter combo E.g. d/f+2, b+2,1, d/b+2,2"
            value={this.state.combo}
            rows={4}
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
