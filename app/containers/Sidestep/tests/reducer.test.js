import { fromJS } from 'immutable';
import sidestepReducer from '../reducer';

describe('sidestepReducer', () => {
  it('returns the initial state', () => {
    expect(sidestepReducer(undefined, {})).toEqual(fromJS({}));
  });
});
