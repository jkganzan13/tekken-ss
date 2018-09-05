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

import injectReducer from 'utils/injectReducer';
import ComboForm from 'components/ComboForm';
import {
  makeIsLoading,
  makeIsLoggedIn,
  makeSelectFirebaseAuth,
} from 'common/selectors';
import IconText from 'components/IconText';
import DataList from 'components/DataList';
import { CommonContainer } from 'common/Styled';

import { FIRESTORE_PATH } from './constants';
import makeSelectCombos from './selectors';
import reducer from './reducer';
import * as actions from './actions';
import { getImgByCharacterName } from './util';
import * as Styled from './Styled';

function Combos(props) {
  const renderCombo = item => (
    <List.Item
      key={item.name}
      actions={[
        <IconText
          type="star-o"
          text={item.ratings ? item.ratings.length : 0}
        />,
      ]}
    >
      <List.Item.Meta
        avatar={<Avatar src={getImgByCharacterName(item.name)} />}
        title={<span>{item.name}</span>}
        description={item.submittedBy}
      />
      {item.combo}
    </List.Item>
  );

  return (
    <CommonContainer>
      <Styled.Container>Filters here</Styled.Container>
      <Styled.Container>
        <DataList
          dataSource={props.combos}
          isLoading={props.isLoading}
          renderItem={renderCombo}
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
