import React, { Component } from 'react';
import dispatcher from './my-flux/dispatcher';


class AddForm extends Component {

  onClick (e) {
    e.preventDefault();
    dispatcher.emit('todos:add', 'Nouveau truc à faire');
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
