import React, { Component } from 'react';


class TodoItem extends Component {

  render() {
    return (
      <div>
        <input type="checkbox" checked={this.props.done} />
        <span>{this.props.text}</span>
        <button>×</button>
      </div>
    );
  }

}

export default TodoItem;
