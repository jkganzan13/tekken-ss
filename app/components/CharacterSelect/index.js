/**
 *
 * CharacterSelect
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import CHARACTERS from 'constants/characters';
import CharacterIcon from './CharacterIcon';
import * as Styled from './Styled';

function CharacterSelect(props) {
  return (
    <Styled.StyledContainer>
      <Styled.CharacterContainer>
        <Styled.StyledCard title="Select Character">
          {CHARACTERS.map(c => (
            <CharacterIcon
              {...c}
              characterKey={c.key}
              isSelected={c.key === props.selected}
              onSelect={() => props.onSelect(c.key)}
            />
          ))}
        </Styled.StyledCard>
      </Styled.CharacterContainer>
    </Styled.StyledContainer>
  );
}

CharacterSelect.propTypes = {
  onSelect: PropTypes.func,
  selected: PropTypes.string,
};

export default CharacterSelect;
