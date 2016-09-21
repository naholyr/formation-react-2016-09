import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import TodoApp from './components/TodoApp';
import PeopleApp from './components/PeopleApp';
import PeopleCard from './components/PeopleCard';


export default (
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Home } />
      <Route path="todos" component={ TodoApp } />
      <Route path="people" component={ PeopleApp }>
        <Route path=":id" component={ PeopleCard } />
      </Route>
    </Route>
  </Router>
);
