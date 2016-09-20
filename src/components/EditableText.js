import React, { Component, PropTypes as T } from 'react';
import { findDOMNode } from 'react-dom';

class EditableText extends Component {

  constructor (props) {
    super(props)

    this.state = {
      editing: false
    };
  }

  render () {
    return this.state.editing
      ? this.renderInput()
      : this.renderSpan();
  }

  renderSpan () {
    return (
      <span onDoubleClick={ () => this.setState({ editing: true }) }>
        { this.props.defaultValue }
      </span>
    );
  }

  renderInput () {
    return (
      <input
        onKeyPress={ e => this.onKeyPress(e) }
        defaultValue={ this.props.defaultValue } />
    );
  }

  onKeyPress (e) {
    if (e.charCode === 13) {
      // Grab value from uncontrolled input
      const input = findDOMNode(this);
      this.props.onChange(input.value);
      // Switch to readonly mode
      this.setState({ editing: false });
    }
  }

  componentDidUpdate (props, state) {
    if (!state.editing && this.state.editing) {
      // Switched from span to input
      const input = findDOMNode(this);
      input.select();
    }
  }

}

EditableText.propTypes = {
  defaultValue: T.string,
  onChange: T.func.isRequired
};

EditableText.defaultProps = {
  defaultValue: ''
};

export default EditableText;
