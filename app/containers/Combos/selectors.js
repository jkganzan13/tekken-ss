import { createSelector } from 'reselect';
import R from 'ramda';
import { fromJS } from 'immutable';
import { selectUsersFirebase } from 'common/selectors';
import { mergeCombosAndUsers, filterCombos } from './util';
import { initialState } from './reducer';

/**
 * Direct selector to the combos state domain
 */

const selectCombosDomain = state => state.get('combos', initialState);

/**
 * Other specific selectors
 */

const selectCombosFromFirestore = state =>
  fromJS(
    R.pathOr(
      initialState.get('comboList'),
      ['ordered', 'combos'],
      state.get('firestore'),
    ),
  );

const selectFilters = state =>
  state.getIn(['combos', 'filters'], initialState.get('filters'));

const selectCombos = () =>
  createSelector(
    selectCombosFromFirestore,
    selectUsersFirebase,
    (combos, users) => mergeCombosAndUsers(combos.toJS(), users),
  );

const makeCombosFilters = () =>
  createSelector(selectFilters, substate => substate.toJS());

/**
 * Default selector used by Combos
 */

const makeSelectCombos = () =>
  createSelector(selectCombos(), makeCombosFilters(), filterCombos);

export default makeSelectCombos;
export { selectCombosDomain, makeCombosFilters };
