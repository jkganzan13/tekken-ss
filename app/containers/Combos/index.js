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
import { firestoreConnect } from 'react-redux-firebase';

import injectReducer from 'utils/injectReducer';
import Combo from 'components/Combo';
import ComboForm from 'components/ComboForm';

import makeSelectCombos from './selectors';
import reducer from './reducer';

const COLUMNS = [
  {
    dataField: 'name',
    text: 'Name',
    headerClasses: 'col-md-1',
  },
  {
    dataField: 'combo',
    text: 'Combo',
    formatter: (cell, row) => <Combo {...row} />,
    headerClasses: 'col-md-8',
  },
  {
    dataField: 'damage',
    text: 'Damage',
    align: 'center',
    headerClasses: 'col-md-1',
  },
  {
    dataField: 'rating',
    text: 'Rating',
    headerClasses: 'col-md-2',
  },
];

/* eslint-disable react/prefer-stateless-function */
export class Combos extends React.Component {
  render() {
    return (
      <div className="container">
        <BootstrapTable
          keyField="id"
          data={this.props.combos}
          columns={COLUMNS}
          noDataIndication="Loading"
        />
        <ComboForm />
      </div>
    );
  }
}

Combos.propTypes = {
  dispatch: PropTypes.func.isRequired,
  combos: PropTypes.array.isRequired,
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
  firestoreConnect(['combos']),
)(Combos);
