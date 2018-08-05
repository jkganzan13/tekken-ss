import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the combos state domain
 */

const selectCombosDomain = state => state.get('combos', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Combos
 */

const makeSelectCombos = () =>
  createSelector(selectCombosDomain, substate => substate.toJS());

export default makeSelectCombos;
export { selectCombosDomain };
