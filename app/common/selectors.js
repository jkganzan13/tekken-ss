import { createSelector } from 'reselect';
import { isAuthenticated } from 'common/auth';

const selectReducer = reducerName => state => state.get(reducerName);

const isLoggedIn = () => isAuthenticated();

const makeIsLoggedIn = () => isLoggedIn;

const selectProfile = createSelector(
  selectReducer('app'),
  substate => substate.toJS().profile,
);

const selectUserId = createSelector(selectProfile, profile => profile.sub);

export { isLoggedIn, makeIsLoggedIn, selectProfile, selectUserId };
