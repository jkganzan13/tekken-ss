import styled from 'styled-components';
import { Layout } from 'antd';

export const Content = styled(Layout.Content)`
  padding: 50px;

  > div {
    background: white;
  }
`;

export const Container = styled.div`
  background: transparent;
  height: 100%;
  width: 100%;
`;
