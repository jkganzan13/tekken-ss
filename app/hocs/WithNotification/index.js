import React from 'react';
import { MdWarning, MdErrorOutline, MdCheckCircle } from 'react-icons/md';
import * as Styled from './Styled';

const DEFAULT_TIMEOUT = 5000;
const COLORS = {
  ERROR: 'danger',
  SUCCESS: 'success',
  WARNING: 'warning',
};

const getIcon = colors => {
  switch (colors) {
    case COLORS.ERROR:
      return <MdErrorOutline />;
    case COLORS.SUCCESS:
      return <MdCheckCircle />;
    case COLORS.WARNING:
      return <MdWarning />;
    default:
      return null;
  }
};

export default function(WrappedComponent) {
  return class extends React.Component {
    state = {
      color: '',
      isOpen: false,
      message: '',
    };

    alert = (color, message, timeout = DEFAULT_TIMEOUT) => {
      this.setState({
        isOpen: true,
        color,
        message,
      });

      setTimeout(() => {
        this.setState({ isOpen: false });
      }, timeout);
    };

    notify = {
      success: (message, timeout) =>
        this.alert(COLORS.SUCCESS, message, timeout),
      error: (message, timeout) => this.alert(COLORS.ERROR, message, timeout),
      warning: (message, timeout) =>
        this.alert(COLORS.WARNING, message, timeout),
    };

    render() {
      return (
        <div>
          <Styled.StyledAlert
            color={this.state.color}
            isOpen={this.state.isOpen}
          >
            {getIcon('danger')} {this.state.message}
          </Styled.StyledAlert>
          <WrappedComponent notify={this.notify} {...this.props} />
        </div>
      );
    }
  };
}
