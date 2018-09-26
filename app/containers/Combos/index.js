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
import { List, Avatar } from 'antd';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { notification } from 'utils/notifications';
import ComboForm from 'components/ComboForm';
import { makeIsLoggedIn, selectUserId } from 'common/selectors';
import Rating from 'components/Rating';
import DataList from 'components/DataList';
import { CommonContainer } from 'common/Styled';
import Filters from 'components/Filters';

import makeSelectCombos, {
  makeCombosFilters,
  makeIsLoading,
} from './selectors';
import reducer from './reducer';
import * as actions from './actions';
import saga from './saga';
import { getImgByCharacterName, calculateDate } from './util';
import * as Styled from './Styled';

const getRatingOnChange = (props, combo) => {
  const enabledFn = rating => props.actions.rateCombo({ id: combo.id, rating });
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
    actions={
      props.userId !== item.submitted_by && [
        <Rating
          isRated={Boolean(item.is_rated_by_user)}
          value={item.total_ratings}
          onChange={getRatingOnChange(props, item)}
        />,
      ]
    }
  >
    <List.Item.Meta
      avatar={<Avatar src={getImgByCharacterName(item.name)} />}
      title={<span>{item.name}</span>}
      // Replace this with display name once implememted (Issue #4)
      description={calculateDate(item.created_at)}
    />
    {item.combo}
  </List.Item>
);

export class Combos extends React.PureComponent {
  componentDidMount() {
    if (!this.props.combos.length) this.props.actions.queryCombos();
  }
  render() {
    return (
      <CommonContainer>
        <Styled.Container>
          <DataList
            header={
              <Filters
                onChange={this.props.actions.filterCombos}
                filters={this.props.filters}
              />
            }
            dataSource={this.props.combos}
            isLoading={this.props.isLoading}
            renderItem={renderCombo(this.props)}
          />
        </Styled.Container>
        {this.props.isLoggedIn && (
          <ComboForm
            onSubmit={combo =>
              this.props.actions.addCombo({
                ...combo,
                submitted_by: this.props.userId,
              })
            }
          />
        )}
      </CommonContainer>
    );
  }
}

Combos.propTypes = {
  combos: PropTypes.array.isRequired,
  isLoggedIn: PropTypes.bool,
  isLoading: PropTypes.bool,
  userId: PropTypes.string,
  actions: PropTypes.object,
  filters: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  combos: makeSelectCombos(),
  isLoggedIn: makeIsLoggedIn(),
  isLoading: makeIsLoading(),
  userId: selectUserId,
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
)(Combos);
