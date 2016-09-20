import dispatcher from './dispatcher';
import uuid from 'uuid';
import Jvent from 'jvent';


let state = {
  todos: [
    {
      id: uuid(),
      text: 'Cultiver mon jardin',
      done: false
    },
    {
      id: uuid(),
      text: 'Formation React',
      done: false
    },
    {
      id: uuid(),
      text: 'Faire la vaisselle',
      done: true
    },
  ]
}


const emitter = new Jvent();

export default {
  getState () {
    return state;
  },
  subscribe (callback) {
    emitter.on('update', callback);
    return () => emitter.off('update', callback);
  }
};


const reducers = {

  "todos:remove": (state, id) => ({
    todos: state.todos.filter(todo => todo.id !== id)
  }),

  "todos:toggle": (state, id) => ({
    todos: state.todos.map(todo => {
      if (todo.id === id) {
        return {
          id: todo.id,
          text: todo.text,
          done: !todo.done
        }
      }
      return todo;
    })
  }),

  "todos:add": (state, text) => ({
    todos: state.todos.concat([{
      id: uuid(),
      text,
      done: false
    }])
  }),

}


Object.keys(reducers).forEach(actionName => {
  dispatcher.on(actionName, (...args) => {
    const oldState = state;
    const newState = reducers[actionName](oldState, ...args);
    state = newState;
    emitter.emit('update', state);
    console.debug('STORE UPDATE', { actionName, args, oldState, newState });
  });
});
