/**
 *
 * Sidestep
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Table } from 'react-bootstrap';

import CHARACTERS from 'constants/characters';
import injectReducer from 'utils/injectReducer';
import makeSelectSidestep from './selectors';
import reducer from './reducer';
import * as Styled from './Styled';

/* eslint-disable react/prefer-stateless-function */
export class Sidestep extends React.Component {
  renderImage = ({ key, img }) => <Styled.Img key={key} src={img} />;

  renderRows = char => (
    <Styled.Row key={char.key}>
      <Styled.TdFit className="col-md-2">{this.renderImage(char)}</Styled.TdFit>
      <td className="col-md-4">{char.name}</td>
      <td className="col-md-4">{char.ss}</td>
    </Styled.Row>
  );

  render() {
    return (
      <Styled.Container className="container">
        <Table hover>
          <thead>
            <tr>
              <th> </th>
              <th>Name</th>
              <th>SS Direction</th>
            </tr>
          </thead>
          <tbody>{CHARACTERS.map(this.renderRows)}</tbody>
        </Table>
      </Styled.Container>
    );
  }
}

Sidestep.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  sidestep: makeSelectSidestep(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'sidestep', reducer });

export default compose(
  withReducer,
  withConnect,
)(Sidestep);
