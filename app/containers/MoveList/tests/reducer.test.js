import { fromJS } from 'immutable';
import moveListReducer from '../reducer';

describe('moveListReducer', () => {
  it('returns the initial state', () => {
    expect(moveListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
