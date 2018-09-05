import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Styled';

const selectedStyle = {
  position: 'relative',
  zIndex: 1,
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
};

const unselectedStyle = { filter: 'grayscale(100%)', opacity: '0.5' };

function CharacterIcon(props) {
  const imgStyle = props.isSelected ? {} : unselectedStyle;
  const cardGridStyle = props.isSelected ? selectedStyle : {};
  return (
    <Styled.CardGrid hoverable onClick={props.onSelect} style={cardGridStyle}>
      <img
        alt={props.characterKey}
        src={props.img}
        width="100%"
        style={imgStyle}
      />
      <Styled.CardMeta title={props.name} />
    </Styled.CardGrid>
  );
}

CharacterIcon.propTypes = {
  characterKey: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  onSelect: PropTypes.func,
  isSelected: PropTypes.bool,
};

export default CharacterIcon;
