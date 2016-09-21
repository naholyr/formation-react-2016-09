import React, { Component, PropTypes as T } from 'react';
import EditableText from './EditableText';
import { connect } from 'react-redux';


export const EDITED_ACTION = 'ReduxEditableText:EDITED';


class ReduxEditableText extends Component {

  render () {
    return <EditableText
      defaultValue={ this.props.defaultValue }
      onChange={ text => this.props.editText(text) } />;
  }

}

ReduxEditableText.propTypes = {
  defaultValue: T.string,
  editText: T.func.isRequired
};

export default connect(null, {
  editText: text => ({
    type: EDITED_ACTION,
    payload: { text }
  })
})(ReduxEditableText);
