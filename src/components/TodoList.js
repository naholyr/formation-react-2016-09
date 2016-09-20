import React, { Component, PropTypes as T } from 'react';
import TodoItem from './TodoItem';
import * as Types from '../types';
import { connect } from 'react-redux';


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

function mapStateToProps (appState) {
  return {
    todos: appState.todos
  };
}

export default connect(mapStateToProps)(TodoList);
