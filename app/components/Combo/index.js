/**
 *
 * Combo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
import {
  ARROWS,
  BUTTONS,
  ARROW_KEYS,
  BUTTONS_KEYS,
  SeparatorIcon,
} from 'constants/buttons';
import * as Styled from './Styled';

const ARROW_BTN_REGEX = /[a-z]\+[1-4]/;
const LETTERS_ONLY_REGEX = /[a-z]+|[^a-z]+/gi;

const splitToMoves = combo => combo.replace(/\//g, '').split(', ');

const splitMovesToButtons = R.map(R.split(','));

const splitButtonsAndArrows = move =>
  move
    .replace('+', '')
    .match(LETTERS_ONLY_REGEX)
    .filter(s => !!s.trim());

const splitToSingleButton = buttons =>
  buttons.map(button =>
    button.reduce((acc, move) => {
      if (ARROW_BTN_REGEX.test(move)) {
        const moves = splitButtonsAndArrows(move);
        return [...acc, ...moves];
      }
      acc.push(move);
      return acc;
    }, []),
  );

const getIcon = button => {
  if (ARROW_KEYS.includes(button)) {
    return ARROWS[button];
  }
  if (BUTTONS_KEYS.includes(button)) {
    return BUTTONS[button];
  }
  return <Styled.Text>{button}</Styled.Text>;
};

const renderButtons = (buttons, index, array) => {
  const buttonIcons = buttons.map(getIcon);
  return index === array.length - 1
    ? buttonIcons
    : buttonIcons.concat(SeparatorIcon);
};

const convertCombo = (combo = '') => {
  const moves = splitToMoves(combo);
  const buttons = splitMovesToButtons(moves);
  const singleButtons = splitToSingleButton(buttons);
  return singleButtons.map(renderButtons);
};

const Combo = ({ id, combo }) => <div key={id}>{convertCombo(combo)}</div>;

Combo.propTypes = {
  id: PropTypes.string,
  combo: PropTypes.string,
};

export default Combo;
