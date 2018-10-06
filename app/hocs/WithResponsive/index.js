import React from 'react';
import Responsive from 'react-responsive';
import { MIN_DESKTOP_RESOLUTION } from 'common/constants';

export default function(WrappedComponent) {
  return props => (
    <Responsive minWidth={MIN_DESKTOP_RESOLUTION}>
      {matches => <WrappedComponent isDesktop={matches} {...props} />}
    </Responsive>
  );
}
