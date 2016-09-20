import React, { Component } from 'react';
import AddForm from './AddForm';
import TodoList from './TodoList';
import './App.css';


class App extends Component {

  constructor (props) {
    super(props)

    this.state = { todos: props.todos }
  }

  addItem (item) {
    this.setState({
      todos: this.state.todos.concat([item])
    })
  }

  render() {
    return (
      <div className="App">
        <h1>TodoList</h1>
        <AddForm onAddItem={ item => this.addItem(item) } />
        <TodoList />
      </div>
    );
  }
}

export default App;
