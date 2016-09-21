import { createStore, combineReducers } from 'redux';

import todosReducer from './reducers/todos';
import uiReducer from './reducers/ui';

export default () => createStore(combineReducers({
  todos: todosReducer,
  ui: uiReducer
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
