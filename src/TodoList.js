import React, { Component } from 'react';
import TodoItem from './TodoItem';
import uuid from 'uuid'


const todos = [
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


class TodoList extends Component {

  constructor (props) {
    super(props)

    this.state = { todos }
  }

  renderTodoItems () {
    return this.state.todos.map(item => (
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
