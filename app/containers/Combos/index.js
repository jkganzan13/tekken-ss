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
import { firestoreConnect } from 'react-redux-firebase';

import injectReducer from 'utils/injectReducer';
import ComboForm from 'components/ComboForm';
import {
  makeIsLoading,
  makeIsLoggedIn,
  makeSelectFirebaseAuth,
} from 'common/selectors';

import { FIRESTORE_PATH } from './constants';
import makeSelectCombos from './selectors';
import reducer from './reducer';
import * as actions from './actions';
import MyList from './MyList';

function Combos(props) {
  return (
    <div className="container">
      <MyList dataSource={props.combos} isLoading={props.isLoading} />
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
  isLoading: PropTypes.bool,
  auth: PropTypes.object,
  actions: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  combos: makeSelectCombos(),
  isLoggedIn: makeIsLoggedIn(),
  isLoading: makeIsLoading(),
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
  firestoreConnect(FIRESTORE_PATH),
)(Combos);
