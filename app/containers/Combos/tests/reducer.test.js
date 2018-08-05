import { fromJS } from 'immutable';
import combosReducer from '../reducer';

describe('combosReducer', () => {
  it('returns the initial state', () => {
    expect(combosReducer(undefined, {})).toEqual(fromJS({}));
  });
});
