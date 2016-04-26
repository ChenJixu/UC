import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import UserInfo from './UserCenter/Menu/UserInfo.js';
import FitArticle from './UserCenter/Menu/FitArticle.js';
import Message from './UserCenter/Menu/Message.js';
import Video from './UserCenter/Menu/Video.js';
import Home from './UserCenter/Menu/Home.js';
import Menu from './UserCenter/Menu/Menu.js';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Menu}>
      <IndexRoute component={Home} />
      <Route path="/home/fitarticle" component={FitArticle} />
      <Route path="/home/userinfo" component={UserInfo} />
      <Route path="/home/video" component={Video} />
      <Route path="/home/message" component={Message} />
    </Route>
  </Router>
   ),
  document.getElementById('wrap')
)