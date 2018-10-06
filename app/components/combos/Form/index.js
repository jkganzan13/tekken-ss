import React from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
import WithResponsive from 'hocs/WithResponsive';
import { Primary } from 'components/common/Buttons';
import CharacterSelect from 'components/common/Select/CharacterSelect';
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

  handleSelectChange = R.curry((key, selected) =>
    this.setState({ [key]: selected.value }),
  );

  submit = () => {
    this.props.onSubmit(this.state);
    this.setState(initialState);
  };

  render() {
    const isInline = this.props.isDesktop;

    return (
      <div>
        <Styled.Title>POST COMBO</Styled.Title>
        <Styled.Form inline={isInline}>
          <FormInput
            id="name"
            label="Character"
            onChange={this.handleSelectChange('name')}
            inputComponent={CharacterSelect}
            isMulti={false}
            width={150}
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
      </div>
    );
  }
}

ComboForm.propTypes = {
  isDesktop: PropTypes.bool,
  onSubmit: PropTypes.func,
};

export default WithResponsive(ComboForm);
