import React, { Component, PropTypes as T } from 'react';
import AddForm from './AddForm';
import TodoList from './TodoList';
import './App.css';
import * as Types from './types';



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

App.propTypes = {
  todos : T.arrayOf(Types.TodoItem)
}

App.defaultProps = {
  todos : []
}
