import React, { Component } from 'react';
import TodoItem from './TodoItem';
import todoStore from './my-flux/store-todos';


class TodoList extends Component {

  constructor (props) {
    super(props)

    console.log('new TodoList')

    this.state = {
      todos: todoStore.getState()
    }
  }

  componentWillMount () {
    todoStore.subscribe(todos => this.setState({ todos }));
  }

  renderTodoItems () {
    return this.state.todos.map(item => (
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

export default TodoList;
