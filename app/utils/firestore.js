import { getFirestore } from 'redux-firestore';

export const addFirestore = (collection, item) =>
  getFirestore().add({ collection }, item);

export const updateFirestore = (collection, item) =>
  getFirestore().update({ collection }, item);
