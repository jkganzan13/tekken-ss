import styled from 'styled-components';
import { Layout } from 'antd';

export const CommonContainer = styled(Layout.Content)`
  padding: 50px;
`;

export const Title = styled.div`
  padding: 12px;
  font-size: 14px;
  font-weight: 500;
`;

export const ListHeader = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  font-size: 16px;
  font-weight: 500;
`;

export const AnchorButton = styled.button`
  cursor: pointer;
  float: right;
`;
