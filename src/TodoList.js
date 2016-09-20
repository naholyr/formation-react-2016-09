import React, { Component, PropTypes as T } from 'react';
import TodoItem from './TodoItem';
import * as Types from './types';


class TodoList extends Component {

  constructor (props) {
    super(props)

    console.log('new TodoList')
  }

  renderTodoItems () {
    return this.props.todos.map(item => (
      <li key={ item.id }>
        <TodoItem onRemoveItem={ this.props.onRemoveItem } item={ item } />
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

  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.todos !== this.props.todos;
  }

}

TodoList.propTypes = {
  todos: T.arrayOf(Types.TodoItem).isRequired,
  onRemoveItem: T.func.isRequired
}

export default TodoList;
