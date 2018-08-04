import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the sidestep state domain
 */

const selectSidestepDomain = state => state.get('sidestep', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Sidestep
 */

const makeSelectSidestep = () =>
  createSelector(selectSidestepDomain, substate => substate.toJS());

export default makeSelectSidestep;
export { selectSidestepDomain };
