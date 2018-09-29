import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'components/common/Avatar';
import Rating from 'components/combos/Rating';
import * as Styled from './Styled';
import { getImgByCharacterName, calculateDate } from './util';

const ListItem = ({ combo, onRatingChange, userId }) => (
  <Styled.Container>
    <div>
      <Avatar src={getImgByCharacterName(combo.name)} />
    </div>
    <Styled.Name>
      <Styled.Text>{combo.name}</Styled.Text>
      <Styled.SubText>{calculateDate(combo.created_at)}</Styled.SubText>
    </Styled.Name>
    <Styled.Damage>{combo.damage}</Styled.Damage>
    <Styled.Col>{combo.combo}</Styled.Col>
    <Styled.Rating>
      {userId !== combo.submitted_by && (
        <Rating
          isRated={Boolean(combo.is_rated_by_user)}
          value={combo.total_ratings}
          onChange={onRatingChange}
        />
      )}
    </Styled.Rating>
  </Styled.Container>
);

ListItem.propTypes = {
  combo: PropTypes.object,
  onRatingChange: PropTypes.func,
  userId: PropTypes.string,
};

export default ListItem;
