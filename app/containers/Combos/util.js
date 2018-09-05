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
  new Date(seconds * 1000).toLocaleDateString('en-US');

const getUserNameById = (users = {}, id) =>
  R.pathOr('Anonymous', [id, 'metadata', 'name'], users);

export const mergeCombosAndUsers = (combos = {}, users = {}) =>
  R.keys(combos).map(k => {
    const combo = combos[k];
    return R.merge(combo, {
      id: k,
      submittedBy: getUserNameById(users, combo.submittedBy),
    });
  });

export const getImgByCharacterName = name =>
  CHARACTERS.find(c => c.name === name).img;
