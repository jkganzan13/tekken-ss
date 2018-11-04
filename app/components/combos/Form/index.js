import React from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
import WithResponsive from 'hocs/WithResponsive';
import { Close, Primary } from 'components/common/Buttons';
import CharacterSelect from 'components/common/Select/CharacterSelect';
import { Drawer } from 'common/Styled';
import * as Styled from './Styled';
import FormInput from './FormInput';

const initialState = {
  name: '',
  combo: '',
  damage: 0,
};

class ComboForm extends React.Component {
  state = { ...initialState };

  handleInputChange = R.curry((key, e) =>
    this.setState({ [key]: e.target.value }),
  );

  handleSelectChange = R.curry((key, value) => this.setState({ [key]: value }));

  submit = () => {
    this.props.onSubmit(this.state);
    this.setState(initialState);
  };

  render() {
    const isInline = this.props.isDesktop;
    const Wrapper = this.props.isDesktop ? Styled.Container : Drawer;

    return (
      <Wrapper>
        <Close
          show={!this.props.isDesktop}
          onClick={this.props.closeForm}
          size={40}
        />
        <Styled.Title>SUBMIT COMBO</Styled.Title>
        <Styled.Form inline={isInline}>
          <FormInput
            id="name"
            label="Character"
            onChange={this.handleSelectChange('name')}
            inputComponent={CharacterSelect}
            isMulti={false}
            width={isInline ? 150 : null}
            inline={isInline}
            closeMenuOnSelect
          />
          <FormInput
            id="damage"
            label="Damage"
            type="number"
            placeholder="e.g. 60"
            onChange={this.handleInputChange('damage')}
            width={100}
            inline={isInline}
          />
          <FormInput
            id="combo"
            label="Combo"
            placeholder="e.g. EWGF, EWGF, b+4 S! cd+4,1"
            onChange={this.handleInputChange('combo')}
            inline={isInline}
          />
          <Primary onClick={this.submit}>Submit</Primary>
        </Styled.Form>
      </Wrapper>
    );
  }
}

ComboForm.propTypes = {
  closeForm: PropTypes.func,
  isDesktop: PropTypes.bool,
  onSubmit: PropTypes.func,
};

export default WithResponsive(ComboForm);
