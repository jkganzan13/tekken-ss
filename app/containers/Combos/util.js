import R from 'ramda';

export const getFilterQuery = filters =>
  Object.keys(filters).reduce((acc, key) => {
    let q = acc;
    const filter = filters[key];
    if (!R.isEmpty(filter)) {
      q += acc ? `&${key}=${filter}` : `?${key}=${filter}`;
    }
    return q;
  }, '');

export const updateCombosById = (combos, id, props = {}) =>
  combos.map(c => (c.id === id ? R.merge(c, props) : c));

export const updateRatingById = (combos, id, rating) =>
  combos.map(c => {
    if (c.id === id) {
      const updatedTotal = rating ? c.total_ratings + 1 : c.total_ratings - 1;
      return R.merge(c, {
        total_ratings: Math.max(0, updatedTotal),
        is_rated_by_user: rating,
      });
    }
    return c;
  });
