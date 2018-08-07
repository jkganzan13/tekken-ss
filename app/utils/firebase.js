import R from 'ramda';

export const mapObject = fromFirestore =>
  R.keys(fromFirestore).map(k => R.merge(fromFirestore[k], { id: k }));
