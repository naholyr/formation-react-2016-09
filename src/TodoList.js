import React, { Component } from 'react';
import TodoItem from './TodoItem';
import uuid from 'uuid'

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
];

class TodoList extends Component {

  renderTodoItems () {
    return todos.map(item => (
      <li>
        <TodoItem key={ item.id } { ...item } />
      </li>
    ))
  }

  render() {
    return (
      <ul>
        { this.renderTodoItems() }
      </ul>
    );
  }

}

export default TodoList;
