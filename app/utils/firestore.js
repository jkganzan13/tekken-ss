import R from 'ramda';
import linq from 'linq2fire';
import { getFirestore } from 'redux-firestore';

export const addFirestore = (collection, item) =>
  getFirestore().add({ collection }, item);

export const updateFirestore = (collection, doc, item) =>
  getFirestore().update({ collection, doc }, item);

const mapDocIds = docs =>
  docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));

export const queryCollection = (collection, query = {}) => {
  let $col = linq(getFirestore()).from(collection);
  if (R.empty(query)) $col = $col.where(query);
  return $col.get().then(mapDocIds);
};
