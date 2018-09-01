import { createSelector } from 'reselect';
import { isLoggedIn } from './auth';

const selectFirebase = state => state.get('firebase');

const makeSelectFirebaseAuth = () =>
  createSelector(selectFirebase, substate => substate.auth);

const makeSelectFirebaseProfile = () =>
  createSelector(selectFirebase, substate => substate.profile);

const makeIsLoggedIn = () =>
  createSelector(makeSelectFirebaseAuth(), isLoggedIn);

export { makeIsLoggedIn, makeSelectFirebaseAuth, makeSelectFirebaseProfile };
