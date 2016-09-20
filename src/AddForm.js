import React, { Component } from 'react';
import uuid from 'uuid';


class AddForm extends Component {

  onClick (e) {
    e.preventDefault();
    this.props.onAddItem({
      id: uuid(),
      text: 'Nouveau truc à faire',
      done: false
    });
  }

  render() {
    return (
      <form>
        <input type="text" />
        <button type="submit" onClick={ (e) => this.onClick(e) }>Add</button>
      </form>
    );
  }

}

export default AddForm;
