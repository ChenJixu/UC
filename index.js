import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Account from './UserCenter/Menu/Account/index.js';
import Message from './UserCenter/Menu/Message/index.js';
import Plan from './UserCenter/Menu/Plan/index.js';
import Home from './UserCenter/Menu/Home/index.js';
import Menu from './UserCenter/Menu/index.js';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Menu}>
      <Route IndexRoute component={Home} />
      <Route path="/home/Message" component={Message} />
      <Route path="/home/Account" component={Account} />
      <Route path="/home/Plan" component={Plan} />
    </Route>
  </Router>
   ),
  document.getElementById('wrap')
)