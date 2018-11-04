import CHARACTERS from 'constants/characters';

export const calculateDate = utc =>
  new Date(utc).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

export const getImgByCharacterName = name =>
  CHARACTERS.find(c => c.name === name).img;
