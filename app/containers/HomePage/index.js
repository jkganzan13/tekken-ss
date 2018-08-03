/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import CHARACTERS from 'constants/characters';
import * as Styled from './Styled';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  renderImage = ({ name, img }) => (
    <Styled.ImgContainer>
      <Styled.ImgText>{name}</Styled.ImgText>
      <Styled.Img src={img} />
    </Styled.ImgContainer>
  );

  renderRows = char => (
    <Styled.Row key={char.key}>
      {this.renderImage(char)}
      {char.ss}
    </Styled.Row>
  );

  render() {
    return (
      <Styled.Container>
        {CHARACTERS.map(this.renderRows)}
      </Styled.Container>
    );
  }
}
