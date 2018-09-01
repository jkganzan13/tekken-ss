import R from 'ramda';

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
