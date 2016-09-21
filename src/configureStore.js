import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import todosReducer from './reducers/todos';
import uiReducer from './reducers/ui';

export default () => createStore(
  combineReducers({
    todos: todosReducer,
    ui: uiReducer
    // other: otherReducer
    // ...
  }),
  compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

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
