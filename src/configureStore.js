import { createStore, combineReducers } from 'redux';

import todosReducer from './reducers/todos';

export default () => createStore(combineReducers({
  todos: todosReducer,
  // other: otherReducer
  // ...
}));

// store.subscribe(() => updateApp(store.getState()))
// store.dispatch(actionCreator())



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
