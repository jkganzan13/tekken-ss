import styled from 'styled-components';
import { CommonContainer } from 'common/Styled';
import { Layout, List } from 'antd';

export const Container = styled(CommonContainer)`
  display: flex;
`;

export const NewsContainer = styled(Layout.Content)`
  flex: 2;
  background: white;
  margin-right: 50px;
`;

export const SidestepContainer = styled(Layout.Content)`
  flex: 1;
  background: white;
  overflow: auto;
`;

export const SidestepListItem = styled(List.Item)`
  .ant-list-item-extra-wrap {
    .ant-list-item-main {
      order: 2;
      margin-left: 58px;
    }
    .ant-list-item-extra {
      order: 1;
      margin-left: 0;
    }
  }
`;
