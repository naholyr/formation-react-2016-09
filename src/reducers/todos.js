import { REMOVE, TOGGLE, ADD } from '../actions/todos';
import uuid from 'uuid';
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

  [ADD]: (prevState, payload) =>
    prevState.concat([{
      id: uuid(),
      text: payload.text,
      done: false
    }]),

}


export default createReducer(initialState, reducers);
