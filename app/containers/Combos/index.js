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
import List from 'components/common/List';
import ListItem from 'components/combos/ListItem';
import Filters from 'components/combos/Filters';
import WithNotification from 'hocs/WithNotification';
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

  getRatingOnChange = combo => {
    const enabledFn = rating =>
      this.props.actions.rateCombo({ id: combo.id, rating });
    const disabledFn = () =>
      this.props.notify.warning('You must be logged in to rate combos.');
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

  renderFilter = () => (
    <Filters
      onSubmit={this.props.actions.queryCombos}
      onFilterChange={this.props.actions.updateFilter}
      filters={this.props.filters}
    />
  );

  render() {
    return (
      <div>
        <List
          dataSource={this.props.combos}
          isLoading={this.props.isLoading}
          renderItem={this.renderCombo}
          renderFilter={this.renderFilter}
        />
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
      </div>
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
  notify: PropTypes.object,
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
  WithNotification,
)(Combos);
