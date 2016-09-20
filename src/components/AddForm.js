import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { add } from '../actions/todos';


// Controlled Input

class AddForm extends Component {

  constructor (props) {
    super(props);

    this.state = { text: '' };
  }

  onClick (e) {
    e.preventDefault();
    const { actions } = this.props

    actions.add(this.state.text);

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

AddForm.propTypes = {
  actions: T.shape({
    add: T.func.isRequired
  }).isRequired
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ add }, dispatch)
  /*actions: {
    add: text => dispatch(add(text))
  }*/
});

export default connect(null, mapDispatchToProps)(AddForm);
