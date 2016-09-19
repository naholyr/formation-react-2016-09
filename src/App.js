import React, { Component } from 'react';
import AddForm from './AddForm';
import TodoList from './TodoList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>TodoList</h1>
        <AddForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
