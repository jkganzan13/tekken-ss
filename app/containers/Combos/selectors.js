import { createSelector } from 'reselect';
import R from 'ramda';
import { fromJS } from 'immutable';
import { mapObject } from 'utils/firebase';
import { initialState } from './reducer';

/**
 * Direct selector to the combos state domain
 */

const selectCombosDomain = state =>
  fromJS(R.pathOr(initialState, ['data', 'combos'], state.get('firestore')));

/**
 * Other specific selectors
 */

/**
 * Default selector used by Combos
 */

const makeSelectCombos = () => createSelector(selectCombosDomain, substate => mapObject(substate.toJS()));

export default makeSelectCombos;
export { selectCombosDomain };
