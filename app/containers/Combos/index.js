/**
 *
 * Combos
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import BootstrapTable from 'react-bootstrap-table-next';

import injectReducer from 'utils/injectReducer';
import Combo from 'components/Combo';
import ComboForm from 'components/ComboForm';

import makeSelectCombos from './selectors';
import reducer from './reducer';

const COMBOS = [
  {
    id: '1',
    name: 'Kuma',
    combo: 'd/f+2,1, 4, b+2,1,3+4, HBS d/f+1,1, f,f,f+1+2',
    damage: 67,
  },
  { id: '2', name: 'Lars', combo: 'f,b+2,1, 4, b+2,1,3+4, d/f+1,1, f,f,f+1+2' },
];

const COLUMNS = [
  { dataField: 'id', text: 'ID', headerClasses: 'col-md-1' },
  { dataField: 'name', text: 'Name', headerClasses: 'col-md-1' },
  {
    dataField: 'combo',
    text: 'Combo',
    formatter: (cell, row) => <Combo {...row} />,
    headerClasses: 'col-md-7',
  },
  { dataField: 'damage', text: 'Damage', align: 'center', headerClasses: 'col-md-1' },
  { dataField: 'rating', text: 'Rating', headerClasses: 'col-md-2' },
]

/* eslint-disable react/prefer-stateless-function */
export class Combos extends React.Component {
  render() {
    return (
      <div className="container">
        <BootstrapTable keyField="id" data={COMBOS} columns={COLUMNS} />
        <ComboForm />
      </div>
    );
  }
}

Combos.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  combos: makeSelectCombos(),
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

const withReducer = injectReducer({ key: 'combos', reducer });

export default compose(
  withReducer,
  withConnect,
)(Combos);
