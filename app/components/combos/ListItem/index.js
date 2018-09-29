import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'components/common/Avatar';
import Rating from 'components/combos/Rating';
import * as Styled from './Styled';
import { getImgByCharacterName, calculateDate } from './util';

const ListItem = ({ combo, onRatingChange, userId }) => (
  <Styled.Container>
    <Styled.FlexRow>
      <Avatar src={getImgByCharacterName(combo.name)} />
    </Styled.FlexRow>
    <Styled.FlexRow>
      <Styled.Text>{combo.name}</Styled.Text>
      <Styled.Text>{calculateDate(combo.created_at)}</Styled.Text>
    </Styled.FlexRow>
    <Styled.FlexRow>{combo.combo}</Styled.FlexRow>
    <Styled.FlexRow>
      {userId !== combo.submitted_by && (
        <Rating
          isRated={Boolean(combo.is_rated_by_user)}
          value={combo.total_ratings}
          onChange={onRatingChange}
        />
      )}
    </Styled.FlexRow>
  </Styled.Container>
);

ListItem.propTypes = {
  combo: PropTypes.object,
  onRatingChange: PropTypes.func,
  userId: PropTypes.string,
};

export default ListItem;
