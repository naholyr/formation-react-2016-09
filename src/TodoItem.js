import React, { Component } from 'react';


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

}

export default TodoItem;
