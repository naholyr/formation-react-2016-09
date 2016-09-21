import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import todosReducer from './reducers/todos';
import uiReducer from './reducers/ui';
import { routerReducer } from 'react-router-redux';

export default () => createStore(
  combineReducers({
    todos: todosReducer,
    ui: uiReducer,
    routing: routerReducer
  }),
  compose(
    applyMiddleware(
      store => next => action => {
        console.log(action);
        next(action);
      },
      thunkMiddleware,
      /* thunkMiddleware ressemble à peu près à ça
      store => next => action => {
        if (typeof action === 'function') {
          action(store.dispatch)
        } else {
          next(action)
        }
      }
      */

    ),
    window.devToolsExtension
      ? window.devToolsExtension()
      : f => f
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
