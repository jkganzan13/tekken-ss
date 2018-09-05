import styled from 'styled-components';
import { Card } from 'antd';

export const StyledContainer = styled.div`
  background: white;
  margin-bottom: 12px;
`;

export const CharacterContainer = styled.div``;

export const StyledCard = styled(Card)`
  .ant-card-body {
    padding: 0;
  }
`;

export const CardGrid = styled(Card.Grid)`
  width: 10%;
  padding: 0;
`;

export const CardMeta = styled(Card.Meta)`
  padding: 12px;
`;
