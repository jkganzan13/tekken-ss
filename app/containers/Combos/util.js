import R from 'ramda';
import CHARACTERS from 'constants/characters';

export const calculateDate = utc =>
  new Date(utc).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

export const getImgByCharacterName = name =>
  CHARACTERS.find(c => c.name === name).img;

export const getFilterQuery = filters =>
  Object.keys(filters).reduce((acc, key) => {
    let q = acc;
    const filter = filters[key];
    if (!R.isEmpty(filter)) {
      q += acc ? `&${key}=${filter}` : `?${key}=${filter}`;
    }
    return q;
  }, '');

export const updateCombosById = (combos, id, props = {}) =>
  combos.map(c => (c.id === id ? R.merge(c, props) : c));
