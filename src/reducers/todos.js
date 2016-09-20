import { REMOVE, TOGGLE, ADD } from '../actions/todos';
import uuid from 'uuid';


const initialState = [ /* {id, text, done} */ ];

export default function reduce (prevState = initialState, action) {
  switch (action.type) {

  case REMOVE:
    return prevState.filter(todo => todo.id !== action.payload.id);

  case TOGGLE:
    return prevState.map(todo => {
      if (todo.id === action.payload.id) {
        return {
          id: todo.id,
          text: todo.text,
          done: !todo.done
        }
      }
      return todo;
    });

  case ADD:
    return prevState.concat([{
      id: uuid(),
      text: action.payload.text,
      done: false
    }]);

  default:
    return prevState

  }
}
