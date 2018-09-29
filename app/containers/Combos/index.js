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
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import ComboForm from 'components/ComboForm';
import { makeIsLoggedIn, selectUserId } from 'common/selectors';
import { CommonContainer } from 'common/Styled';
import List from 'components/common/List';
import ListItem from 'components/combos/ListItem';

import makeSelectCombos, {
  makeCombosFilters,
  makeIsLoading,
} from './selectors';
import reducer from './reducer';
import * as actions from './actions';
import saga from './saga';
import * as Styled from './Styled';

export class Combos extends React.PureComponent {
  componentDidMount() {
    if (!this.props.combos.length) this.props.actions.queryCombos();
  }

  // renderCombo = item => (
  //   <List.Item
  //     key={item.name}
  //     actions={
  //       this.props.userId !== item.submitted_by && [
  //         <Rating
  //           isRated={Boolean(item.is_rated_by_user)}
  //           value={item.total_ratings}
  //           onChange={getRatingOnChange(this.props, item)}
  //         />,
  //       ]
  //     }
  //   >
  //     <List.Item.Meta
  //       avatar={<Avatar src={getImgByCharacterName(item.name)} />}
  //       title={<span>{item.name}</span>}
  //       // Replace this with display name once implememted (Issue #4)
  //       description={calculateDate(item.created_at)}
  //     />
  //     {item.combo}
  //   </List.Item>
  // );

  getRatingOnChange = combo => {
    const enabledFn = rating =>
      this.props.actions.rateCombo({ id: combo.id, rating });
    const disabledFn = () => console.log('disabled');
    return this.props.isLoggedIn ? enabledFn : disabledFn;
  };

  renderCombo = combo => (
    <ListItem
      key={combo.id}
      combo={combo}
      onRatingChange={this.getRatingOnChange(combo)}
      userId={this.props.userId}
    />
  );

  render() {
    return (
      <CommonContainer>
        <List dataSource={this.props.combos} renderItem={this.renderCombo} />
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
