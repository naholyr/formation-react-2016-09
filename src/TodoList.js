import React, { Component } from 'react';
import TodoItem from './TodoItem';


class TodoList extends Component {

  constructor (props) {
    super(props)

    console.log('new TodoList')
  }

  renderTodoItems () {
    return this.props.todos.map(item => (
      <li key={ item.id }>
        <TodoItem onRemoveItem={ this.props.onRemoveItem } { ...item } />
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
