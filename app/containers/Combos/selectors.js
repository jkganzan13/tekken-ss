import { createSelector } from 'reselect';
import R from 'ramda';
import { fromJS } from 'immutable';
import { selectUsersFirebase } from 'common/selectors';
import { mergeCombosAndUsers } from './util';
import { initialState } from './reducer';

/**
 * Direct selector to the combos state domain
 */

const selectCombosDomain = state =>
  fromJS(R.pathOr(initialState, ['ordered', 'combos'], state.get('firestore')));

/**
 * Other specific selectors
 */

/**
 * Default selector used by Combos
 */

const makeSelectCombos = () =>
  createSelector(selectCombosDomain, selectUsersFirebase, (combos, users) =>
    mergeCombosAndUsers(combos.toJS(), users),
  );

export default makeSelectCombos;
export { selectCombosDomain };
