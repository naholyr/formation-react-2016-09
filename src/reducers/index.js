import { combineReducers } from 'redux';

import todosReducer from './todos';

/* Global App State

{
  todos: [
    {
      id,
      text,
      done
    }
  ],
  // ...
}
*/


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
