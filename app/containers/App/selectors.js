import { createSelector } from 'reselect';

const selectRoute = state => state.get('route');
const selectFirebase = state => state.get('firebase');

const makeSelectFirebaseAuth = () =>
  createSelector(selectFirebase, substate => substate.auth);

const makeSelectFirebaseProfile = () =>
  createSelector(selectFirebase, substate => substate.profile);

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get('location').toJS());

export {
  makeSelectLocation,
  makeSelectFirebaseAuth,
  makeSelectFirebaseProfile,
};
