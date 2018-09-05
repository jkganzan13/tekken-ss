import React from 'react';
import { List } from 'antd';
import DataList from 'components/DataList';
import CHARACTERS from 'constants/characters';
import * as Styled from './Styled';

function Sidestep() {
  const renderItem = item => (
    <Styled.SidestepListItem
      key={item.name}
      extra={<img alt={item.name} width="160" height="80" src={item.img} />}
    >
      <List.Item.Meta title={<span>{item.name}</span>} />
      {item.ss}
    </Styled.SidestepListItem>
  );

  return (
    <Styled.SidestepContainer>
      <DataList
        header={<Styled.ListHeader>Sidestep Guide</Styled.ListHeader>}
        dataSource={CHARACTERS}
        isLoading={false}
        renderItem={renderItem}
        itemLayout="vertical"
      />
    </Styled.SidestepContainer>
  );
}

export default Sidestep;