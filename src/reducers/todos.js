import { REMOVE, TOGGLE, ADD_SUCCESS, UPDATE, LOAD_SUCCESS } from '../actions/todos';

import { createReducer } from '../helpers';


const initialState = [ /* {id, text, done} */ ];

const reducers = {

  [REMOVE]: (prevState, payload) =>
    prevState.filter(todo => todo.id !== payload.id),

  [TOGGLE]: (prevState, payload) =>
    prevState.map(todo => {
      if (todo.id === payload.id) {
        return Object.assign({}, todo, {
          done: !todo.done
        });
      }
      return todo;
    }),

  [ADD_SUCCESS]: (prevState, payload) =>
    prevState.concat([payload.item]),

  [UPDATE]: (prevState, { id, text }) =>
    prevState.map(todo => todo.id === id
      ? Object.assign({}, todo, { text })
      : todo
    ),

  [LOAD_SUCCESS]: (prevState, payload) =>
    payload.items,

}


export default createReducer(initialState, reducers);
