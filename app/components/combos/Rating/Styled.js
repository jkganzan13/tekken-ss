import styled from 'styled-components';
import { MdStar } from 'react-icons/md';
import { DarkYellow, LightGrey } from 'assets/styles/colors';

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Value = styled.div`
  margin-left: 5px;
  margin-top: 2px;
`;

export const Icon = styled(MdStar)`
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  color: ${props => (props.isRated ? DarkYellow : LightGrey)};
`;
