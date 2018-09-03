import R from 'ramda';
import { isLoaded } from 'react-redux-firebase';
import { createSelector } from 'reselect';
import { isLoggedIn } from './auth';

const selectFirebase = state => state.get('firebase');

const selectFirestore = state => state.get('firestore');

const selectUsersFirebase = state =>
  R.pathOr({}, ['data', 'users'], state.get('firestore'));

const makeSelectFirebaseAuth = () =>
  createSelector(selectFirebase, substate => substate.auth);

const makeSelectFirebaseProfile = () =>
  createSelector(selectFirebase, substate => substate.profile);

const makeIsLoggedIn = () =>
  createSelector(makeSelectFirebaseAuth(), isLoggedIn);

const makeIsLoading = () =>
  createSelector(
    selectFirestore,
    firestore =>
      !isLoaded(firestore.data.users) && !isLoaded(firestore.data.combos),
  );

export {
  makeIsLoading,
  makeIsLoggedIn,
  makeSelectFirebaseAuth,
  makeSelectFirebaseProfile,
  selectUsersFirebase,
};
