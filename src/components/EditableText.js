import React, { Component, PropTypes as T } from 'react';
import { findDOMNode } from 'react-dom';

class EditableText extends Component {

  constructor (props) {
    super(props)

    this.state = {
      editing: false,
      value: this.props.defaultValue
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
        onChange={ e => this.onChange(e) }
        onKeyPress={ e => this.onKeyPress(e) }
        defaultValue={ this.props.defaultValue } />
    );
  }

  onChange (e) {
    this.setState({ value: e.target.value });
  }

  onKeyPress (e) {
    if (e.charCode === 13) {
      this.setState({ editing: false });
      this.props.onChange(this.state.value);
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
