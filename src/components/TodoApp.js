import React, { Component } from 'react';
import AddForm from './AddForm';
import TodoList from './TodoList';
import './TodoApp.css';


class TodoApp extends Component {

  render() {
    return (
      <div className="TodoApp">
        <h1>TodoList</h1>
        <AddForm />
        <TodoList />
      </div>
    );
  }
}

export default TodoApp;
