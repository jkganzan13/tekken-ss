import React from 'react';
import Collapsible from 'components/common/Collapsible';
import * as Styled from './Styled';

const NoInfo = <Styled.NoValue>N/A</Styled.NoValue>;

const renderText = text => (
  <Styled.TextCell>{text === 'null' || !text ? NoInfo : text}</Styled.TextCell>
);

const renderTextWithLabel = (label, text) => (
  <Styled.TextCell>
    {label}: {renderText(text)}
  </Styled.TextCell>
);

const renderMoveDesktop = move => (
  <Styled.MoveContainer key={move.notation}>
    {renderText(move.notation)}
    {renderText(move.hit_level)}
    {renderText(move.damage)}
    {renderText(move.speed)}
    {renderText(move.on_block)}
    {renderText(move.on_hit)}
    {renderText(move.on_ch)}
    {renderText(move.notes)}
  </Styled.MoveContainer>
);

const getToggle = move => (
  <Styled.MoveContainer>
    {renderText(move.notation)}
    {renderText(move.hit_level)}
    {renderText(move.damage)}
    {renderText(move.speed)}
  </Styled.MoveContainer>
);

const collapseStyle = {
  borderBottom: '1px solid white',
};

const renderMoveMobile = (move, i) => (
  <Collapsible
    key={move.notation}
    id={`collapsible_${i}`}
    toggle={getToggle(move)}
    containerStyle={collapseStyle}
  >
    <Styled.Collapsible>
      {renderTextWithLabel('On Block', move.on_block)}
      {renderTextWithLabel('On Hit', move.on_hit)}
      {renderTextWithLabel('On CH', move.on_ch)}
      {renderTextWithLabel('Notes', move.notes)}
    </Styled.Collapsible>
  </Collapsible>
);

export default isDesktop => (isDesktop ? renderMoveDesktop : renderMoveMobile);
