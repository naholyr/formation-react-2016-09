import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestAdd, failureAdd, successAdd } from '../actions/todos';
import { addItem } from '../todos-api';


// Controlled Input

class AddForm extends Component {

  constructor (props) {
    super(props);

    this.state = { text: '' };
  }

  onClick (e) {
    e.preventDefault();
    const { actions } = this.props

    actions.requestAdd(this.state.text);
    addItem(this.state.text)
    .then(item => actions.successAdd(item))
    .catch(error => actions.failureAdd(error));

    actions.add(this.state.text);

    this.setState({ text: '' });
  }

  updateText (e) {
    this.setState({ text: e.target.value });
  }

  render() {
    const { isLoading } = this.props
    return (
      <form>
        <input type="text" value={ this.state.text } onChange={ (e) => this.updateText(e) } />
        <button type="submit" onClick={ (e) => this.onClick(e) }>Add</button>
        { isLoading ? <p>Loading…</p> : null }
      </form>
    );
  }

}


AddForm.propTypes = {
  actions: T.shape({
    requestAdd: T.func.isRequired,
    successAdd: T.func.isRequired,
    failureAdd: T.func.isRequired,
  }).isRequired,
  isLoading: T.bool
};

AddForm.defaultProps = {
  isLoading: false
};

const mapStateToProps = (state, ownProps) => ({
  isLoading: state.ui.isAddingItem
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: bindActionCreators({ requestAdd, successAdd, failureAdd }, dispatch)
  /*actions: {
    add: text => dispatch(add(text))
  }*/
});

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);





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
