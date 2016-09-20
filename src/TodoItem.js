import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';


class TodoItem extends Component {

  onClick(e) {
    e.preventDefault();
    this.props.onRemoveItem(this.props.id);
  }

  render() {
    return (
      <div>
        <input type="checkbox" checked={this.props.done} />
        <span>{this.props.text}</span>
        <button onClick={ (e) => this.onClick(e)}>×</button>
      </div>
    );
  }

  // Lifecycle

  constructor (props) {
    super(props);

    console.log('new TodoItem');
  }

  componentWillMount () {
    console.debug('TodoItem.componentWillMount');
  }

  componentDidMount () {
    console.debug('TodoItem.componentDidMount');
    console.info('TodoItem.Node', findDOMNode(this));
  }

  componentShouldUpdate (nextProps, nextState) {
    console.debug('TodoItem.componentShouldUpdate');
    return true;
  }

  componentWillUpdate (nextProps, nextState) {
    console.debug('TodoItem.componentWillUpdate');
  }

  componentDidUpdate (nextProps, nextState) {
    console.debug('TodoItem.componentDidUpdate');
  }

  componentWillUnmount () {
    console.debug('TodoItem.componentWillUnmount');
  }

}

export default TodoItem;
