import React, { Component, PropTypes as T } from 'react';
import TodoItem from './TodoItem';
import * as Types from '../types';
import { connect } from 'react-redux';
import { load } from '../actions/todos';


class TodoList extends Component {

  renderTodoItems () {
    return this.props.todos.map(item => (
      <li key={ item.id }>
        <TodoItem item={ item } />
      </li>
    ))
  }

  render() {
    if (this.props.isLoading) {
      return <p>Loading items…</p>;
    }

    return (
      <ul>
        { this.renderTodoItems() }
      </ul>
    );
  }

  componentWillMount () {
    this.props.load();
  }

}

TodoList.propTypes = {
  todos: T.arrayOf(Types.TodoItem),
  load: T.func.isRequired,
  isLoading: T.bool
};

TodoList.defaultProps = {
  todos: [],
  isLoading: false
}

function mapStateToProps (appState) {
  return {
    isLoading: appState.ui.isLoadingItems,
    todos: appState.todos
  };
}

export default connect(mapStateToProps, { load })(TodoList);
