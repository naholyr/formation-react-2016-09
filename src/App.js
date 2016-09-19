import React, { Component } from 'react';
import AddForm from './AddForm';
import TodoList from './TodoList';
import uuid from 'uuid';
import './App.css';


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


class App extends Component {

  constructor (props) {
    super(props)

    this.state = { todos }
  }

  addItem (item) {
    this.setState({
      todos: this.state.todos.concat([item])
    })
  }

  removeItem (id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  render() {
    return (
      <div className="App">
        <h1>TodoList</h1>
        <AddForm onAddItem={ item => this.addItem(item) } />
        <TodoList onRemoveItem={ item => this.removeItem(item) } todos={ this.state.todos } />
      </div>
    );
  }
}

export default App;
