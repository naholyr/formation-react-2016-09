import React, { Component, PropTypes as T } from 'react';
import { findDOMNode } from 'react-dom';
import * as Types from './types';

class TodoItem extends Component {

  onClick(e) {
    e.preventDefault();
    this.props.onRemoveItem(this.props.item.id);
  }

  render() {
    return (
      <div>
        <input type="checkbox" checked={this.props.item.done} />
        <span>{this.props.item.text}</span>
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
  item: Types.TodoItem.isRequired,
  onRemoveItem: T.func.isRequired
};

TodoItem.defaultProps = {
  done: false
};

export default TodoItem;
