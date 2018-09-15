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
      initialState.get('combos'),
      ['data', 'combos'],
      state.get('firestore'),
    ),
  );

const selectCombosFromReducer = state =>
  fromJS(state.getIn(['combos', 'combos'], initialState.get('combos')));

/**
 * Manual sort combos
 * Problem: Ordered collection does not remove item from ratings
 * Solution: use firestore.data instead and manual sort
 */
const sortByTimestamp = R.sort(
  R.descend(c => (c.createdAt ? c.createdAt.seconds : c.timestamp.seconds)),
);

const mergeAndSortCombos = R.pipe(
  mergeCombosAndUsers,
  sortByTimestamp,
);
/* End */

const selectFilters = state =>
  state.getIn(['combos', 'filters'], initialState.get('filters'));

const selectCombos = () =>
  createSelector(
    selectCombosFromReducer,
    selectUsersFirebase,
    (combos, users) => {
      return mergeAndSortCombos(combos.toJS(), users)
    },
  );

const makeCombosFilters = () =>
  createSelector(selectFilters, substate => substate.toJS());

const makeIsLoading = () =>
  createSelector(selectCombosDomain, substate => substate.toJS().isLoading);

/**
 * Default selector used by Combos
 */
const makeSelectCombos = () => selectCombos();

export default makeSelectCombos;
export { selectCombosDomain, makeCombosFilters, makeIsLoading };
