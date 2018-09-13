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
import { List, Avatar } from 'antd';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { notification } from 'utils/notifications';
import ComboForm from 'components/ComboForm';
import {
  makeIsLoading,
  makeIsLoggedIn,
  makeSelectFirebaseAuth,
} from 'common/selectors';
import Rating from 'components/Rating';
import DataList from 'components/DataList';
import { CommonContainer } from 'common/Styled';
import Filters from 'components/Filters';

import makeSelectCombos, { makeCombosFilters } from './selectors';
import reducer from './reducer';
import * as actions from './actions';
import saga from './saga';
import {
  getImgByCharacterName,
  queryFirestore,
  calculateDate,
  isRatedByCurrentUser,
} from './util';
import * as Styled from './Styled';

const getRatingOnChange = (props, combo) => {
  const enabledFn = rating =>
    props.actions.rateCombo(combo, props.auth.uid, !!rating);
  const disabledFn = () =>
    notification.warning(
      'You are not logged in',
      'Please login to rate combos.',
    );
  return props.isLoggedIn ? enabledFn : disabledFn;
};

const renderCombo = props => item => (
  <List.Item
    key={item.name}
    actions={[
      <Rating
        isRated={isRatedByCurrentUser(props.auth.uid, item.ratings)}
        value={item.ratings ? item.ratings.length : 0}
        onChange={getRatingOnChange(props, item)}
      />,
    ]}
  >
    <List.Item.Meta
      avatar={<Avatar src={getImgByCharacterName(item.name)} />}
      title={<span>{item.name}</span>}
      // Replace this with display name once implememted (Issue #4)
      description={calculateDate(
        item.createdAt ? item.createdAt.seconds : item.timestamp.seconds,
      )}
    />
    {item.combo}
  </List.Item>
);

function Combos(props) {
  return (
    <CommonContainer>
      <Styled.Container>
        <DataList
          header={
            <Filters
              onChange={props.actions.updateFilter}
              filters={props.filters}
            />
          }
          dataSource={props.combos}
          isLoading={props.isLoading}
          renderItem={renderCombo(props)}
        />
      </Styled.Container>
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
    </CommonContainer>
  );
}

Combos.propTypes = {
  combos: PropTypes.array.isRequired,
  isLoggedIn: PropTypes.bool,
  isLoading: PropTypes.bool,
  auth: PropTypes.object,
  actions: PropTypes.object,
  filters: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  combos: makeSelectCombos(),
  isLoggedIn: makeIsLoggedIn(),
  isLoading: makeIsLoading(),
  auth: makeSelectFirebaseAuth(),
  filters: makeCombosFilters(),
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
const withSaga = injectSaga({ key: 'combos', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  firestoreConnect(queryFirestore),
)(Combos);
