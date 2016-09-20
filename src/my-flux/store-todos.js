import dispatcher from './dispatcher';
import uuid from 'uuid';
import Jvent from 'jvent';


let todos = [
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


const emitter = new Jvent();

export default {
  getState () {
    return todos;
  },
  subscribe (callback) {
    emitter.on('update', callback);
    return () => emitter.off('update', callback);
  }
};


dispatcher.on('todos:remove', id => {
  todos = todos.filter(todo => todo.id !== id);
  emitter.emit('update', todos);
})
