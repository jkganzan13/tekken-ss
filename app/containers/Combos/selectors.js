import { createSelector } from 'reselect';
import { fromJS } from 'immutable';
import { initialState } from './reducer';

/**
 * Direct selector to the combos state domain
 */

const selectCombosDomain = state => state.get('combos', initialState);

/**
 * Other specific selectors
 */

const selectCombosFromReducer = state =>
  fromJS(state.getIn(['combos', 'combos'], initialState.get('combos')));

const selectFilters = state =>
  state.getIn(['combos', 'filters'], initialState.get('filters'));

const makeCombosFilters = () =>
  createSelector(selectFilters, substate => substate.toJS());

const makeIsLoading = () =>
  createSelector(selectCombosDomain, substate => substate.toJS().isLoading);

/**
 * Default selector used by Combos
 */
const makeSelectCombos = () =>
  createSelector(selectCombosFromReducer, combos => combos.toJS());

export default makeSelectCombos;
export { selectCombosDomain, makeCombosFilters, makeIsLoading };
