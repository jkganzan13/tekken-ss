import React from 'react';
import PropTypes from 'prop-types';
import List from 'components/common/List';
import WithResponsive from 'hocs/WithResponsive';
import * as Styled from './Styled';
import renderMove from './Move';

const renderHeader = isDesktop => () => (
  <Styled.HeaderContainer>
    <Styled.TextCell>Command</Styled.TextCell>
    <Styled.TextCell>Hit Level</Styled.TextCell>
    <Styled.TextCell>Damage</Styled.TextCell>
    <Styled.TextCell>Speed</Styled.TextCell>
    {isDesktop && <Styled.TextCell>Block frames</Styled.TextCell>}
    {isDesktop && <Styled.TextCell>Hit frames</Styled.TextCell>}
    {isDesktop && <Styled.TextCell>CH frames</Styled.TextCell>}
    {isDesktop && <Styled.TextCell>Properties</Styled.TextCell>}
  </Styled.HeaderContainer>
);

const EmptyTable = () => (
  <Styled.EmptyHeader>No character selected</Styled.EmptyHeader>
);

const Table = props => (
  <Styled.Container>
    {props.moves.length ? (
      <List
        dataSource={props.moves}
        isLoading={props.isLoading}
        renderHeader={renderHeader(props.isDesktop)}
        renderItem={renderMove(props.isDesktop)}
      />
    ) : (
      <EmptyTable />
    )}
  </Styled.Container>
);

Table.propTypes = {
  isDesktop: PropTypes.bool,
  isLoading: PropTypes.bool,
  moves: PropTypes.array,
};

export default WithResponsive(Table);
