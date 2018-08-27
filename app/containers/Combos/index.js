/**
 *
 * Combos
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import BootstrapTable from 'react-bootstrap-table-next';
import { firestoreConnect } from 'react-redux-firebase';
import Rater from 'react-rater';

import injectReducer from 'utils/injectReducer';
import Combo from 'components/Combo';
import ComboForm from 'components/ComboForm';

import { FIRESTORE_PATH } from './constants';
import makeSelectCombos from './selectors';
import reducer from './reducer';
import * as actions from './actions';

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
    formatter: (cell, row) => (
      <Rater total={5} rating={row.rating} interactive={false} />
    ),
    headerClasses: 'col-md-2',
  },
];

const Combos = props => (
  <div className="container">
    <BootstrapTable
      keyField="id"
      data={props.combos}
      columns={COLUMNS}
      noDataIndication="Loading"
    />
    <ComboForm onSubmit={props.actions.addCombo} />
  </div>
);

Combos.propTypes = {
  combos: PropTypes.array.isRequired,
  actions: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  combos: makeSelectCombos(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
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
  firestoreConnect([FIRESTORE_PATH]),
)(Combos);
