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
import { makeIsLoggedIn, makeSelectFirebaseAuth } from 'common/selectors';

import { FIRESTORE_PATH } from './constants';
import makeSelectCombos from './selectors';
import reducer from './reducer';
import * as actions from './actions';
import { calculateRating, calculateDate } from './util';

function Combos(props) {
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
      headerClasses: 'col-md-7',
    },
    {
      dataField: 'damage',
      text: 'Damage',
      align: 'center',
      headerClasses: 'col-md-1',
    },
    {
      dataField: 'timestamp',
      text: 'Date',
      align: 'left',
      headerClasses: 'col-md-1',
      formatter: (cell, row) => calculateDate(row.timestamp.seconds),
    },
    {
      dataField: 'rating',
      text: 'Rating',
      formatter: (cell, row) => (
        <Rater
          total={5}
          rating={calculateRating(row.ratings)}
          interactive={props.isLoggedIn}
          onRate={({ rating }) => props.actions.rateCombo(rating)}
        />
      ),
      headerClasses: 'col-md-2',
    },
  ];

  return (
    <div className="container">
      <BootstrapTable
        keyField="id"
        data={props.combos}
        columns={COLUMNS}
        noDataIndication="Loading"
      />
      {props.isLoggedIn && (
        <ComboForm
          onSubmit={combo =>
            props.actions.addCombo({
              ...combo,
              submittedBy: props.auth.uid,
            })
          }
        />
      )}
    </div>
  );
}

Combos.propTypes = {
  combos: PropTypes.array.isRequired,
  isLoggedIn: PropTypes.bool,
  auth: PropTypes.object,
  actions: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  combos: makeSelectCombos(),
  isLoggedIn: makeIsLoggedIn(),
  auth: makeSelectFirebaseAuth(),
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
