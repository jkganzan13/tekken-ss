import R from 'ramda';
import CHARACTERS from 'constants/characters';

const calculateAverage = (ratings = []) =>
  ratings.reduce((acc, rating) => acc + rating.value, 0) / ratings.length;

const roundDownToNearestHalf = n =>
  parseFloat((Math.floor(n * 2) / 2).toFixed(1));

export const calculateRating = R.pipe(
  calculateAverage,
  roundDownToNearestHalf,
);

export const calculateDate = seconds =>
  new Date(seconds * 1000).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

const getUserNameById = (users = {}, id) =>
  R.pathOr('Anonymous', [id, 'metadata', 'name'], users);

export const mergeCombosAndUsers = (combos = {}, users = {}) =>
  R.keys(combos).map(k => {
    const combo = combos[k];
    return R.merge(combo, {
      submittedBy: getUserNameById(users, combo.submittedBy),
    });
  });

export const getImgByCharacterName = name =>
  CHARACTERS.find(c => c.name === name).img;

export const queryFirestore = () => [
  { collection: 'users' },
  {
    collection: 'combos',
    orderBy: ['timestamp', 'desc'],
  },
]

const getCharacterFilters = filters => {
  if (!filters.characters.length) return R.T;
  const characters = filters.characters.map(c => R.propEq('name', c));
  return R.anyPass(characters);
};

export const filterCombos = (combos, filters) => {
  const characterFilters = getCharacterFilters(filters);
  const comboFilter = c => c.combo.includes(filters.combo.trim());
  const filter = R.allPass([characterFilters, comboFilter]);
  return combos.filter(filter);
};

export const isRatedByCurrentUser = (userId, ratings = []) =>
  !!ratings.find(r => r.userId === userId);
