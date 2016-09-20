import React, { Component, PropTypes as T } from 'react';
import TodoItem from './TodoItem';
import todoStore from '../my-flux/store-todos';
import * as Types from '../types';
import connect from '../my-flux/connect';


class TodoList extends Component {

  renderTodoItems () {
    return this.props.todos.map(item => (
      <li key={ item.id }>
        <TodoItem item={ item } />
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

TodoList.propTypes = {
  todos: T.arrayOf(Types.TodoItem).isRequired
};

export default connect(TodoList, todoStore);
