import { combineReducers } from 'redux';

import todosReducer from './todos';


combineReducers({
  todos: todosReducer,
  // other: otherReducer
  // ...
})

/*
function (prevState, action) {
  return {
    todos: todosReducer(prevState.todos, action),
    // ...
  }
}
*/
