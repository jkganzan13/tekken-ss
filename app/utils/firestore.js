import R from 'ramda';
import { getFirestore } from 'redux-firestore';

export const mapObject = fromFirestore =>
  R.keys(fromFirestore).map(k => R.merge(fromFirestore[k], { id: k }));

export const addFirestore = (collection, item) =>
  getFirestore().add({ collection }, item);

export const updateFirestore = (collection, item) =>
  getFirestore().update({ collection }, item);
