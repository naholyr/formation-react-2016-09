import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import * as Types from '../types';
import dispatcher from '../my-flux/dispatcher';

class TodoItem extends Component {

  onRemove(e) {
    e.preventDefault();
    dispatcher.emit('todos:remove', this.props.item.id);
  }

  onToggle() {
    dispatcher.emit('todos:toggle', this.props.item.id);
  }

  render() {
    return (
      <div>
        <input type="checkbox"
          checked={this.props.item.done}
          onChange={ () => this.onToggle() } />
        <span>{this.props.item.text}</span>
        <button
          onClick={ (e) => this.onRemove(e)}>×</button>
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

  shouldComponentUpdate (nextProps, nextState) {
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

TodoItem.propTypes = {
  item: Types.TodoItem.isRequired
};

TodoItem.defaultProps = {
  done: false
};

export default TodoItem;
