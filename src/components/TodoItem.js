import React, { Component, PropTypes as T } from 'react';
import { findDOMNode } from 'react-dom';
import * as Types from '../types';
import { remove, toggle } from '../actions/todos';
import { connect } from 'react-redux';


class TodoItem extends Component {

  onRemove(e) {
    e.preventDefault();
    this.props.remove(this.props.item.id);
  }

  onToggle() {
    this.props.toggle(this.props.item.id);
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
  item: Types.TodoItem.isRequired,
  removeItem: T.func.isRequired,
  toggleItem: T.func.isRequired,
};

TodoItem.defaultProps = {
  done: false
};

export default connect(null, {
  remove,
  toggle
})(TodoItem);
