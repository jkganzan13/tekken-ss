/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage';
import Sidestep from 'containers/Sidestep';
import Combos from 'containers/Combos';
import AppNav from 'components/AppNav';

export default function App() {
  return (
    <div>
      <AppNav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/ss" component={Sidestep} />
        <Route exact path="/combos" component={Combos} />
        <Route component={HomePage} />
      </Switch>
    </div>
  );
}
