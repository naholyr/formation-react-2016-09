import React, { Component } from 'react';
import dispatcher from './my-flux/dispatcher';


// Controlled Input

class AddForm extends Component {

  constructor (props) {
    super(props);

    this.state = { text: '' };
  }

  onClick (e) {
    e.preventDefault();
    dispatcher.emit('todos:add', this.state.text);
    this.setState({ text: '' });
  }

  updateText (e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <form>
        <input type="text" value={ this.state.text } onChange={ (e) => this.updateText(e) } />
        <button type="submit" onClick={ (e) => this.onClick(e) }>Add</button>
      </form>
    );
  }

}


/* Uncontrolled Input

class AddForm extends Component {

  onClick (e) {
    e.preventDefault();
    dispatcher.emit('todos:add', this._currentText);
    this._currentText = '' /// Oui mais là ça render pas :(
  }

  updateText (e) {
    this._currentText = e.target.value;
  }

  render() {
    return (
      <form>
        <input type="text" defaultValue="Task description" onChange={ (e) => this.updateText(e) } />
        <button type="submit" onClick={ (e) => this.onClick(e) }>Add</button>
      </form>
    );
  }

}
*/


export default AddForm;
