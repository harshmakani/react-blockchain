import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BlockList from './components/BlockList';
import LatestBlock from './components/LatestBlock';
import Block from './components/Block';
import Transaction from './components/Transaction';

const routes = (
  <Switch>
    <Route exact path='/' component={BlockList} />
    <Route exact path='/latest-block' component={LatestBlock} />
    <Route exact path='/block/:hash' component={Block} />
    <Route exact path='/transaction/:hash' component={Transaction} />
  </Switch>
);
export default routes;
