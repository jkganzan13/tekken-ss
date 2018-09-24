import { createSelector } from 'reselect';
import { isAuthenticated } from 'common/auth';

const selectReducer = reducerName => state => state.get(reducerName);

const makeIsLoggedIn = () => () => isAuthenticated();

const selectProfile = createSelector(
  selectReducer('app'),
  substate => substate.toJS().profile,
);

export { makeIsLoggedIn, selectProfile };
